const sequelize = require('../config/db')
const DataTypes  = require('sequelize');
const AuthorModel = sequelize.define(
    'Author',
    {
      id:
        {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4 ,
            primaryKey : true
          }
      ,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      experience: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      
      }
     
    },
    
  );

  module.exports = AuthorModel