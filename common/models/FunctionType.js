'use strict'

module.exports = (sequelize, DataTypes) => {
  var FunctionType = sequelize.define('FunctionType', {
	  
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
	  defaultValue: DataTypes.UUIDV4
    },
	Name: {
      type: DataTypes.STRING,
      required: true
    },
  Index: {
      type: DataTypes.INTEGER,
      required: true
    },
  },
	{ 
		tableName: 'FunctionType', // this will define the table's name
		timestamps: false,           // this will deactivate the timestamp columns		
  });
	FunctionType.schema("public");
  return FunctionType;
};