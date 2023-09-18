const express = require('express');
const { check } = require('express-validator');
const { createLead ,getAllLeads,getLeadById} = require('../controller/lead');
const { authenticateToken } = require('../Middleware/auth');

const router = express.Router();

// Define validation rules for lead creation
const leadValidationRules = [
  check('address').isString(),
  check('AnnualRevenue').isFloat(),
  // Add validation rules for other fields
];

// Create a lead under the authenticated user
router.post('/createLead', authenticateToken, leadValidationRules, createLead);

router.get('/getLeadName', authenticateToken, getAllLeads);

router.get('/getLeadDetails', authenticateToken, getLeadById);


module.exports = router;
