'use strict'

module.exports = (sequelize, DataTypes) => {
  var SectorType = sequelize.define('SectorType', {
	  
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
  EmailSuffixes:{
      type: DataTypes.STRING,
      required: false
    },
  IsFunctional:{
      type: DataTypes.BOOLEAN,
      required: true
    },
  },
	{ 
		tableName: 'SectorType', // this will define the table's name
		timestamps: false,           // this will deactivate the timestamp columns		
  });
	SectorType.schema("public");
  return SectorType;
};