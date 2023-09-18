// accountRoutes.js

const express = require('express');
const { body, validationResult } = require('express-validator');
const { createAccount,getAccountById , getAllAccounts} = require('../controller/account');
const { authenticateToken } = require('../Middleware/auth');

const router = express.Router();
const accountValidationRules = [

];

router.post('/createAccount', authenticateToken, createAccount);

router.get('/getAccountName', authenticateToken, getAllAccounts);

router.get('/getAccountDetails', authenticateToken, getAccountById);


module.exports = router;
