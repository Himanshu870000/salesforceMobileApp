// accountController.js

const { validationResult } = require('express-validator');
const Account = require('../models/account'); // Import your Account model

// Create an Account record
exports.createAccount = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    const accountData = req.body;

    const userId = req.user.id; 


    const account = await Account.create(accountData);

 

    return res.status(201).json(account);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: 'Something went wrong.',
    });
  }
};


exports.getAllAccounts = async (req, res) => {
  try {
    // Query the database for the required fields
    const accounts = await Account.findAll({
      attributes: ['Name','id', 'RecordType', 'AccountNumber'],
    });

    // Check if any records were found
    if (!accounts || accounts.length === 0) {
      return res.status(404).json({ message: 'No Account records found' });
    }

    // Send the retrieved data as a response
    res.status(200).json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};



exports.getAccountById = async (req, res) => {
  try {
    // Extract the account ID from the query parameters
    const accountId = req.query.id;

    // Query the database for the account details by ID
    const account = await Account.findByPk(accountId);

    // Check if the account was found
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    // Send the retrieved account data as a response
    res.status(200).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};