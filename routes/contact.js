// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const contactController = require('../controller/contact');
// const { authenticateToken } = require('../Middleware/auth');

// const router = express.Router();

// // Define validation rules for Contact creation
// const contactValidationRules = [
//   body('Assistant').isString(),
//   body('AsstPhone').isMobilePhone(),
//   body('Birthday').isDate(),
//   body('Department').isString(),
//   body('Description').isString(),
//   body('DoNotCall').isBoolean(),
//   body('Email').isEmail(),
//   body('EmailOptOut').isBoolean(),
//   body('Fax').isMobilePhone(),
//   body('FaxOptOut').isBoolean(),
//   body('GenderIdentity').isString(),
//   body('HomePhone').isMobilePhone(),
//   // Add validation rules for other fields
// ];

// // Create a Contact under the authenticated user
// router.post('/createContact', authenticateToken, contactValidationRules, contactController.createContact);

// module.exports = router;

const express = require('express');
const {createContact, getAllContacts , getContactById} = require('../controller/contact');
const { authenticateToken } = require('../Middleware/auth');

const router = express.Router();

// Create a Contact under the authenticated user
router.post('/createContact', authenticateToken, createContact);

router.get('/getContactName', authenticateToken, getAllContacts);

router.get('/getContactDetails', authenticateToken, getContactById);

module.exports = router;

