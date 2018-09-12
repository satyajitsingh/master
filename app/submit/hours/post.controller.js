'use strict'

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')

const calculateFieldService = require('../../../common/services/calculate-field')

const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')

module.exports = (req, res) => {
  	// Get the current submission based on the url query param
  	var cookie = new cookieModel(req)
  	const submission = cookie.getSubmission(req.query.id)

  	// Add to cookie
  	submission.facility = req.body.facility
  	submission.activities = req.body.activities

  	// Parse hours (float)
  	const facility = calculateFieldService.parseHours(req.body.facility)
  	const activities = calculateFieldService.parseHours(req.body.activities)
  	if (facility & activities) {
  		 // Add parsed to cookie
		submission.facility = facility
		submission.activities = activities
  	}

	// Define a validation chain for our facility field
	const facilityChain = [
		new ValidationRule(validator.notEmpty, 'facility', facility, 'Please enter the total number of hours spent on paid facility time'),
		new ValidationRule(validator.decimal, 'facility', facility, 'Please enter the total number of hours spent on paid facility time to two decimal places e.g 123.93')
	]

	// Define a validation chain for our activities field
	const activitiesChain = [
		new ValidationRule(validator.notEmpty, 'activities', activities, 'Please enter the total number of hours spent on paid trade union activities'),
		new ValidationRule(validator.decimal, 'activities', activities, 'Please enter the total number of hours spent on paid trade union activities to two decimal places e.g 123.93'),
		new ValidationRule(validator.xlessthanyCheck, 'activities',  activities - facility, 'The total number of hours spent on paid trade union activities cannot exceed the total number of hours spent on paid facility time')
	]

	// Validate chains
	validator.validateChains([facilityChain, activitiesChain]).then(response => {

		// Calculate hours percentage and store
		var calculatedHours = calculateFieldService.percentageHours(facility, activities)
		if (calculatedHours) {
			submission.hours_p = calculatedHours
		} else {
			submission.hours_p = 0
		}

		res.redirect('/submit/check?id=' + req.query.id);
	}).catch(err => {
		logger.error(err)
		res.render('app/submit/hours/index', {cookie, submission, errors: err})
	});

}