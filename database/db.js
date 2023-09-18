const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Himanshu@2023', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
