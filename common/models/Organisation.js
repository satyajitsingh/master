'use strict'

module.exports = (sequelize, DataTypes) => {
  var Organisation = sequelize.define('Organisation', {
   Id:{
      type: DataTypes.UUID,
      primaryKey: true,
	  defaultValue: DataTypes.UUIDV4
    },
   Name:{
      type: DataTypes.STRING,
      required: true
    },
   Code:{
      type: DataTypes.STRING,
      required: false
    },
   EmailSuffixes:{
      type: DataTypes.STRING,
      required: false
    },
    Region:{
      type: DataTypes.STRING,
      required: false
    }, 
	SectorTypeId:{
		type: DataTypes.UUID
	 },
  IsSeeded:{
    type:DataTypes.BOOLEAN
   }
  },
  { 
		tableName: 'Organisation', // this will define the table's name
		timestamps: false,           // this will deactivate the timestamp columns		
  });
  Organisation.schema("public");
  return Organisation;
};
