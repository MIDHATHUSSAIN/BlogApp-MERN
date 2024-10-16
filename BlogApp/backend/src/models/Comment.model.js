const sequelize = require('../config/db')
const DataTypes  = require('sequelize');
const CommentModel = sequelize.define(
    'Comment',
    {
      id:
        {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4 ,
            primaryKey : true
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
     
      },
     
    },
    
  );

  module.exports = CommentModel