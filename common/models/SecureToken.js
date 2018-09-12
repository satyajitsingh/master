'use strict'

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var SecureToken = sequelize.define('SecureToken', {
     Id:{
        type: DataTypes.UUID,
        primaryKey: true,
      defaultValue: DataTypes.UUIDV4
      },
     SecureToken:{
        type: DataTypes.STRING,
        required: true
      },
     Email:{
        type: DataTypes.STRING,
        required: true
      },
     FirstName:{
        type: DataTypes.STRING,
        required: true
      },
      LastName:{
        type: DataTypes.STRING,
        required: true
      }, 
      ClientIPAddress: {
        type: DataTypes.STRING,
        required: true
      },
    Status:{
      type: DataTypes.STRING,
        required: true
    },
    OrganisationId:{
      type: DataTypes.UUID,
      required: true
    },
    IssuedTimestamp:{
      type: DataTypes.DATE,
      required: true,
    },
    StatusChangedTimestamp:{
      type: DataTypes.DATE,
      required: true
    },
    HasPublicSectorSuffix:{
      type: DataTypes.BOOLEAN,
      required: true
    },
    HasOrganisationSuffix:{
      type: DataTypes.BOOLEAN,
      required: true
    },
    HasSectorSuffix:{
      type: DataTypes.BOOLEAN,
      required: true
    },
  },
  { 
    tableName: 'SecureToken', // this will define the table's name
    timestamps: false,           // this will deactivate the timestamp columns    
  });

  SecureToken.associate = function(models) {
    foreignKey: {
      Organisation.Id
    }
  };

  SecureToken.schema("public");
  return SecureToken;
};
