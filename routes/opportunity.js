// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const opportunityController = require('../controllers/opportunity');
// const { authenticateToken } = require('../middleware/auth');

// const router = express.Router();

// // Define validation rules for Opportunity creation
// const opportunityValidationRules = [
//   // Add validation rules for Opportunity fields
//   body('Amount').isFloat(),
//   body('CloseDate').isISO8601().toDate(),
//   body('Description').isString(),
//   body('ExpectedRevenue').isFloat(),
//   body('ForecastCategoryName').isString(),
//   body('LeadSource').isString(),
//   body('NextStep').isString(),
//   body('OpportunityName').isString(),
//   body('OpportunityOwner').isInt(),
//   body('OpportunityRecordType').isInt(),
//   body('OpportunityScore').isInt(),
//   body('Stage').isString(),
//   body('SyncedQuote').isInt(),
//   body('Type').isString(),
// ];

// // Create an Opportunity under the authenticated user
// router.post('/createOpportunity', authenticateToken, opportunityValidationRules, opportunityController.createOpportunity);

// module.exports = router;

const express = require('express');
const opportunityController = require('../controller/opportunity');
const { authenticateToken } = require('../Middleware/auth');

const router = express.Router();

// Create an Opportunity under the authenticated user
router.post('/createOpportunity', authenticateToken, opportunityController.createOpportunity);

module.exports = router;

