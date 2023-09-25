const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BisleriApp', 'postgres', 'Himanshu@2023', {
  host: 'localhost', 
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
