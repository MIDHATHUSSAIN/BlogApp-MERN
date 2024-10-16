const Sequelize = require('sequelize')

  const sequelize = new Sequelize('blogapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });

 


  module.exports = sequelize


