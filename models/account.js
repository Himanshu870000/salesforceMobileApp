const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Account = sequelize.define('Account', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AccountNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Stage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RecordType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AccountSite: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AccountSource: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AnnualRevenue: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  BillingAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Tier: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NumberOfEmployees: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Fax: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Industry: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Ownership: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Rating: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ShippingAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SicCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SicDesc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Account;


// Assuming you have already defined the Account model as shown in the previous response

// Uncomment and run to insert sample records
// (async () => {
//      try {
//        await sequelize.sync({ force: true }); // Drop existing table and recreate it
   
//        await Account.bulkCreate([
//          {
//            Name: 'ABC Corp',
//            AccountNumber: '123456',
//            RecordType: 'Some Record Type',
//            AccountSite: 'Main Office',
//            AccountSource: 'corporate',
//            AnnualRevenue: 1000000.0,
//            BillingAddress: '789 Billing St',
//            Description: 'Account description',
//            Tier: 'Tier 1',
//            NumberOfEmployees: 500,
//            Fax: '555-123-4567',
//            Industry: 'Energy',
//            Ownership: 'Public',
//            Phone: '555-789-1234',
//            Rating: 'Hot',
//            ShippingAddress: '789 Shipping St',
//            SicCode: '98765',
//            SicDesc: 'SIC Description',
//            Type: 'Customer',
//            Website: 'https://example.com',
//          },
//          {
//            Name: 'XYZ Inc',
//            AccountNumber: '654321',
//            RecordType: 'Another Record Type',
//            AccountSite: 'Branch Office',
//            AccountSource: 'Direct',
//            AnnualRevenue: 2000000.0,
//            BillingAddress: '456 Billing St',
//            Description: 'Another account description',
//            Tier: 'Tier 2',
//            NumberOfEmployees: 1000,
//            Fax: '555-987-6543',
//            Industry: 'Agriculture',
//            Ownership: 'Private',
//            Phone: '555-321-4567',
//            Rating: 'Warm',
//            ShippingAddress: '456 Shipping St',
//            SicCode: '54321',
//            SicDesc: 'Another SIC Description',
//            Type: 'Competitor',
//            Website: 'https://example2.com',
//          },
//          // Add more sample records here
//        ]);
   
//        console.log('Records inserted successfully');
//      } catch (error) {
//        console.error('Error inserting records:', error);
//      } finally {
//        await sequelize.close(); // Close the connection when done
//      }
//    })();
   