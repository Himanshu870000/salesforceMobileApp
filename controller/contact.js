const { validationResult } = require('express-validator');
const Contact = require('../models/contact'); // Import your Contact model

// Create a Contact record
exports.createContact = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    // Extract Contact data from the request body
    const contactData = req.body;

    // Create the Contact record
    const contact = await Contact.create(contactData);

    return res.status(201).json(contact);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: 'Something went wrong.',
    });
  }
};




exports.getAllContacts = async (req, res) => {
  try {
    // Query the database for the required fields
    const contacts = await Contact.findAll({
      attributes: ['Title','id'],
    });

    // Check if any records were found
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: 'No Contact records found' });
    }

    // Send the retrieved data as a response
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};



exports.getContactById = async (req, res) => {
  try {
    // Extract the account ID from the query parameters
    const contactId = req.query.id;

    // Query the database for the account details by ID
    const contact = await Contact.findByPk(contactId);

    // Check if the account was found
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Send the retrieved account data as a response
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
   