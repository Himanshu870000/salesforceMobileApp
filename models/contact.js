const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Contact = sequelize.define('Contact', {
  AccountName: {
    type: DataTypes.INTEGER, // Change this to the appropriate data type for a lookup (e.g., INTEGER)
    allowNull: true,
  },
  Assistant: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AssistantPhone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Birthday: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  ContactOwner: {
    type: DataTypes.INTEGER, // Change this to the appropriate data type for a lookup (e.g., INTEGER)
    allowNull: true,
  },
  Department: {
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
  EmailOptOut: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Fax: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FaxOptOut: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  GenderIdentity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HomePhone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LastStayInTouchRequestDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  LastStayInTouchSaveDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  LeadSource: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  MailingAddress: {
    type: DataTypes.STRING, // Change this to the appropriate data type for an address (e.g., STRING)
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
  OtherAddress: {
    type: DataTypes.STRING, // Change this to the appropriate data type for an address (e.g., STRING)
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
  ReportTo: {
    type: DataTypes.INTEGER, // Change this to the appropriate data type (e.g., INTEGER)
    allowNull: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Contact;


// Uncomment and run to insert sample records
// (async () => {
//      try {
//        await sequelize.sync({ force: true }); // Drop existing table and recreate it
   
//        await Contact.bulkCreate([
//          {
//            // Define the sample Contact records here
//            Assistant: 'John Smith',
//            AsstPhone: '555-123-4567',
//            Birthday: new Date('1990-05-15'),
//            Department: 'Sales',
//            Description: 'Contact description',
//            DoNotCall: false,
//            Email: 'john@example.com',
//            EmailOptOut: true,
//            Fax: '555-987-6543',
//            FaxOptOut: false,
//            GenderIdentity: 'Male',
//            HomePhone: '555-789-1234',
//            LastStayInTouchRequestDate: new Date('2023-07-20'),
//           LastStayInTouchSaveDate: new Date('2023-07-25'),
//           LeadSource: 'Web Form',
//           Mobile: '555-321-4567',
//           FirstName: 'John',
//           LastName: 'Doe',
//           Phone: '555-555-5555',
//           Pronouns: 'he/him',
//           Title: 'Sales Representative',
//          },
//          {
//           Assistant: 'John Smith',
//           AsstPhone: '555-123-4567',
//           BirthDay: '1990-05-15',
//           Department: 'Sales',
//           Description: 'Contact description',
//           DoNotCall: false,
//           Email: 'john@example.com',
//           EmailOptOut: true,
//           Fax: '555-987-6543',
//           FaxOptOut: false,
//           GenderIdentity: 'Male',
//           HomePhone: '555-789-1234',
//           LastStayInTouchRequestDate: new Date('2023-07-20'),
//           LastStayInTouchSaveDate: new Date('2023-07-25'),
//           LeadSource: 'Web Form',
//           Mobile: '555-321-4567',
//           FirstName: 'John',
//           LastName: 'Doe',
//           Phone: '555-555-5555',
//           Pronouns: 'he/him',
//           Title: 'Sales Representative',
//          },
//        ]);
   
//        console.log('Records inserted successfully');
//      } catch (error) {
//        console.error('Error inserting records:', error);
//      } finally {
//        await sequelize.close(); // Close the connection when done
//      }
//    })();