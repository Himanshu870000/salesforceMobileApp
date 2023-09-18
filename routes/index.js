const express = require("express");
const router = express.Router();
const client = require("../database/connection"); 

router.get('/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM userses');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
