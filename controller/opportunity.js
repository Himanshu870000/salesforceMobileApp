const { validationResult } = require('express-validator');
const Opportunity = require('../models/opportunity'); // Import your Opportunity model

// Create an Opportunity record
exports.createOpportunity = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    // Extract opportunity data from the request body
    const opportunityData = req.body;

    // Create the Opportunity record
    const opportunity = await Opportunity.create(opportunityData);

    return res.status(201).json(opportunity);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: 'Something went wrong.',
    });
  }
};



exports.getAllOpportunity = async (req, res) => {
  try {
    // Query the database for the required fields
    const opportunity = await Opportunity.findAll({
      attributes: ['Title','id'],
    });

    // Check if any records were found
    if (!opportunity || opportunity.length === 0) {
      return res.status(404).json({ message: 'No Contact records found' });
    }

    // Send the retrieved data as a response
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};



exports.getOpportunityById = async (req, res) => {
  try {
    // Extract the account ID from the query parameters
    const oppId = req.query.id;

    // Query the database for the account details by ID
    const opportunity = await Opportunity.findByPk(oppId);

    // Check if the account was found
    if (!opportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }

    // Send the retrieved account data as a response
    res.status(200).json(opportunity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
   