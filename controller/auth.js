const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user');
const sequelize = require('../database/connection');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const { authenticateToken } = require('../Middleware/auth');
        



exports.signup = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg,
            });
        }

        const { name, email, password } = req.body;
        console.log('Name--->', name);
        console.log('Email--->', email);
        console.log('Pass--->', password);

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                error: "User already exists",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: hashedPassword });

 
        

        res.json({
            name: user.name,
            email: user.email,
            id: user.id,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Something went wrong.",
        });
    }
};



exports.signin = async (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }

    try {
        let user = await User.findOne({ where: { email } });

        if (!user) {
            return res
                .status(400)
                .json({ error: "User email does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ error: "Email and password do not match" });
        }

        const payload = {
            user: {
                id: user.id,
                email: user.email,
            },
        };

        // Create and sign the token
        jwt.sign(
            payload,
            process.env.JWT_KEY,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Token generation error" });
                }

                // Set the token in a cookie
                res.cookie("token", token, { expire: new Date() + 9999 });

                const { id, name, email } = user;
                // Respond with token and user info
                return res.json({
                    token,
                    user: { id, name, email },
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Sign-in error" });
    }
};




// Get user profile
exports.userDetails = async (req, res) => {
     try {
          const user = await User.findByPk(req.user.id, {
               attributes: ['name','email'],
          });
   
          if (!user) {
               return res.status(404).json({ error: "User not found" });
          }
   
          res.json(user);
     } catch (err) {
          console.error(err.message);
          res.status(500).json({ error: "Server error" });
     }
};


// Verify the User

