const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;

// Insert a few records
// (async () => {
//   try {
//     await sequelize.sync({ force: true }); // Drop existing table and recreate it

//     await User.bulkCreate([
//       {
//         name: 'John Doe',
//         email: 'john@example.com',
//         password: 'hashedpassword1',
//       },
//       {
//         name: 'Jane Smith',
//         email: 'jane@example.com',
//         password: 'hashedpassword2',
//       },
//       {
//         name: 'Alice Johnson',
//         email: 'alice@example.com',
//         password: 'hashedpassword3',
//       },
//     ]);

//     console.log('Records inserted successfully');
//   } catch (error) {
//     console.error('Error inserting records:', error);
//   } finally {
//     await sequelize.close(); // Close the connection when done
//   }
// })();
