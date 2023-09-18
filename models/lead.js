const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

// Define your Lead model
const Lead = sequelize.define('Lead', {
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AnnualRevenue: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  Company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  DoNotCall: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  HasOptedOutOfEmail: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Fax: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GenderIdentity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Industry: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LastTransferDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  OwnerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  RecordTypeId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  LeadSource: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Mobile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NumberOfEmployees: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Pronouns: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Website: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  Rating: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Lead;

// Uncomment and run to insert sample records
// (async () => {
//   try {
//     await sequelize.sync({ force: true }); // Drop existing table and recreate it

//     await Lead.bulkCreate([
//       {
//         address: '123 Main St',
//         AnnualRevenue: 1000000,
//         Company: 'ABC Corp',
//         Description: 'Lead description',
//         DoNotCall: false,
//         Email: 'john@example.com',
//         HasOptedOutOfEmail: true,
//         Fax: '555-123-4567',
//         GenderIdentity: 'Male',
//         Industry: 'Energy',
//         LastTransferDate: new Date('2023-01-15'),
//         OwnerId: 1, // Replace with the actual owner's ID
//         RecordTypeId: 1, // Replace with the actual record type ID
//         LeadSource: 'corporateInquiry',
//         Status: 'New',
//         Mobile: '555-987-6543',
//         FirstName: 'John',
//         LastName: 'Doe',
//         NumberOfEmployees: 50,
//         Phone: '555-789-1234',
//         Pronouns: 'he/him',
//         Title: 'CEO',
//         Website: 'https://example.com',
//         Rating: 'Hot',
//       },
//       {
//         address: '456 Oak St',
//         AnnualRevenue: 2000000,
//         Company: 'XYZ Inc',
//         Description: 'Another lead description',
//         DoNotCall: true,
//         Email: 'jane@example.com',
//         HasOptedOutOfEmail: false,
//         Fax: '555-987-6543',
//         GenderIdentity: 'Female',
//         Industry: 'Agriculture',
//         LastTransferDate: new Date('2023-02-20'),
//         OwnerId: 2, // Replace with the actual owner's ID
//         RecordTypeId: 2, // Replace with the actual record type ID
//         LeadSource: 'Direct',
//         Status: 'Qualified',
//         Mobile: '555-123-7890',
//         FirstName: 'Jane',
//         LastName: 'Smith',
//         NumberOfEmployees: 100,
//         Phone: '555-321-4567',
//         Pronouns: 'she/her',
//         Title: 'COO',
//         Website: 'https://example2.com',
//         Rating: 'Warm',
//       },
//       // Add more sample records here
//     ]);

//     console.log('Records inserted successfully');
//   } catch (error) {
//     console.error('Error inserting records:', error);
//   } finally {
//     await sequelize.close(); // Close the connection when done
//   }
// })();
