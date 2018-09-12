'use strict'

module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define('Submission', {
	 Id:{
      type: DataTypes.UUID,
      primaryKey: true,
	  defaultValue: DataTypes.UUIDV4
    },
	SecureTokenId:{
	  type:DataTypes.UUID,
	},
	SubmittedTimestamp:{
	  type: DataTypes.DATE,
      required: true
	},
	SubmissionReference:{
	  type: DataTypes.STRING,
      required: true
	},
	OrganisationId:{
		type: DataTypes.UUID,
		required: true
	},
	SubmissionPeriod:{
	  type: DataTypes.STRING,
	  required:true
	},
	FunctionTypeId:{
	  type: DataTypes.UUID,
	  required:true
	},
	ClientIPAddress:{
	  type: DataTypes.STRING,
	  required:true
	},
	Employees:{
	  type: DataTypes.STRING,
	  required:true
	},
	NumberofRelevantUnionOfficials:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	FullTimeEquivalentEmployees:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	ZeroPercentTimeSpent:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	OnetoFiftyPercentTimeSpent:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	FiftyOnetoNinetyNinePercentTimeSpent:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	HundredPercentTimeSpent:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	TotalCostofFacilityTime:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	TotalPayBill:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	PercentagePayBill:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	HoursPaidFacilityTime:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	HoursPaidActivities:{
	  type: DataTypes.DECIMAL,
	  required:true
	},
	PercentageTimeSpent:{
	  type: DataTypes.DECIMAL,
	  required:true
	}
  },
  { 
    tableName: 'Submission', // this will define the table's name
    timestamps: false,           // this will deactivate the timestamp columns    
  });

  Submission.schema("public");
  return Submission;
};
