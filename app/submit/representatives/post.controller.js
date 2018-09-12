'use strict'

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')

const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')

module.exports = (req, res) => {

  	// Get the current submission based on the url query param
  	var cookie = new cookieModel(req)
  	const submission = cookie.getSubmission(req.query.id)

	// Update submission based on form data
	submission.reps = req.body.reps
	submission.ftes = req.body.ftes

	// Define a validation chain for our representatives field
	const repsChain = [
		new ValidationRule(validator.notEmpty, 'reps', req.body.reps, 'Please enter the number of trade union representatives'),
		new ValidationRule(validator.wholeNumber, 'reps', req.body.reps, 'Please enter a whole number for trade union representatives e.g. 200'),
		new ValidationRule(validator.max4DigitsNumber, 'reps', req.body.reps, 'Please enter no more than four digits for trade union representatives')
	]

	// Define a validation chain for our FTEs field
	const ftesChain = [
		new ValidationRule(validator.notEmpty, 'ftes', req.body.ftes, 'Please enter the FTE number of trade union representatives'),
		new ValidationRule(validator.decimal, 'ftes', req.body.ftes, 'Please enter the FTE number to two decimal places e.g 123.93'),
		new ValidationRule(validator.xlessthanyCheck, 'ftes',req.body.ftes - req.body.reps, 'The number of FTEs cannot exceed the total number of trade union representatives')
	]

	// Validate chains
	validator.validateChains([repsChain, ftesChain] ).then(response => {
		res.redirect('/submit/distribution?id=' + req.query.id);
	}).catch(err => {
		logger.error(err)
		res.render('app/submit/representatives/index', { cookie, submission, errors: err })
	});

}