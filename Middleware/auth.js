// authenticateToken.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = { authenticateToken };
