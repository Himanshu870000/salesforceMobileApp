const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Opportunity = sequelize.define('Opportunity', {
  Amount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  CloseDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ExpectedRevenue: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ForecastCategoryName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LeadSource: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NextStep: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  OpportunityName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  OpportunityOwner: {
    type: DataTypes.INTEGER, // Change this to the appropriate data type for a lookup (e.g., INTEGER)
    allowNull: true,
  },
  OpportunityRecordType: {
    type: DataTypes.INTEGER, // Change this to the appropriate data type for a lookup (e.g., INTEGER)
    allowNull: true,
  },
  OpportunityScore: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Stage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SyncedQuote: {
    type: DataTypes.INTEGER, // Change this to the appropriate data type for a lookup (e.g., INTEGER)
    allowNull: true,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Opportunity;

// Uncomment and run to insert a sample record
// (async () => {
//   try {
//     await sequelize.sync({ force: true }); // Drop existing table and recreate it

//     await Opportunity.create({
//       Amount: 100000.0,
//       CloseDate: '2023-12-31',
//       Description: 'Opportunity description',
//       ExpectedRevenue: 50000.0,
//       ForecastCategoryName: 'Category A',
//       LeadSource: 'Web',
//       NextStep: 'Follow up with client',
//       OpportunityName: 'Opportunity 1',
//       OpportunityOwner: 1, // Replace with the actual owner's ID
//       OpportunityRecordType: 1, // Replace with the actual record type ID
//       OpportunityScore: 80,
//       Stage: 'Prospecting',
//       SyncedQuote: 2, // Replace with the actual quote ID
//       Type: 'New Business',
//     });

//     console.log('Opportunity record inserted successfully');
//   } catch (error) {
//     console.error('Error inserting Opportunity record:', error);
//   } finally {
//     await sequelize.close(); // Close the connection when done
//   }
// })();
