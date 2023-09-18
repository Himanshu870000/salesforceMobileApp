const { validationResult } = require('express-validator');
const User = require('../models/user');
const Lead = require('../models/lead'); // Adjust this import as needed
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// Create a lead under the authenticated user
// exports.createLead = async (req, res) => {
//      try {
//        const errors = validationResult(req);
   
//        if (!errors.isEmpty()) {
//          return res.status(422).json({
//            errors: errors.array(),
//          });
//        }
   
//        // Extract lead data from the request body
//        const leadData = req.body;
   
//        // Get the authenticated user's ID from the token
//        const userId = req.user.id; // This extracts the user ID from the token
   
//        // Find the authenticated user in your database
//        const user = await User.findByPk(userId);
   
//        if (!user) {
//          return res.status(404).json({
//            error: 'User not found',
//          });
//        }
   
//        // Create the lead and associate it with the user
//        const lead = await Lead.create({ ...leadData, UserId: userId });
   
//        // Retrieve the lead by its ID
//        const createdLead = await Lead.findByPk(lead.id);
   
//        // Check if the UserId associated with the lead matches the authenticated user's ID
//        if (createdLead.UserId !== userId) {
//          return res.status(500).json({
//            error: 'UserId mismatch',
//          });
//        }
   
//        return res.status(201).json(lead);
//      } catch (err) {
//        console.error(err);
//        return res.status(500).json({
//          error: 'Something went wrong.',
//        });
//      }
// };
   

exports.createLead = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    const leadData = req.body;

    const userId = req.user.id; 


    const lead = await Lead.create(leadData);

 

    return res.status(201).json(lead);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: 'Something went wrong.',
    });
  }
};




exports.getAllLeads = async (req, res) => {
  try {
    // Query the database for the required fields
    const leads = await Lead.findAll({
      attributes: ['Title','id'],
    });

    // Check if any records were found
    if (!leads || leads.length === 0) {
      return res.status(404).json({ message: 'No Leads records found' });
    }

    // Send the retrieved data as a response
    res.status(200).json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};



exports.getLeadById = async (req, res) => {
  try {
    // Extract the account ID from the query parameters
    const leadId = req.query.id;

    // Query the database for the account details by ID
    const lead = await Lead.findByPk(leadId);

    // Check if the account was found
    if (!lead) {
      return res.status(404).json({ message: 'Account not found' });
    }

    // Send the retrieved account data as a response
    res.status(200).json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
   
