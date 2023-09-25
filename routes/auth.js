var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signup, signin, userDetails } = require("../controller/auth");
const { authenticateToken } = require('../Middleware/auth');


router.post(
  "/signup",
  [
    check("type", "name should be at least 3 char").isLength({ min: 3 }),
    check("username", "username is required").isLength({ min: 3 }),
    check("password", "password should be at least 3 char").isLength({ min: 3 }),

  ],
  signup
);


router.post(
  "/signin",
  [
    check("username", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signin
);


router.get("/userDetails", authenticateToken, userDetails);



module.exports = router;