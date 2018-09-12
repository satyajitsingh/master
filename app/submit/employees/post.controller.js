'use strict'

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')
const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')

const categories = require('../../../data/config_employees_categories')

module.exports = (req, res) => {
	// Get the current submission based on the url query param
	var cookie = new cookieModel(req)
	var submission = cookie.getSubmission(req.query.id)
	submission.employees = req.body.employees

	// Define a validation chain for our representatives field
	const employeesChain = [
		new ValidationRule(validator.notEmpty, 'employees', req.body.employees, 'Please tell us the number of employees in your organisation')
	]

	// Validate chains
	validator.validateChains([employeesChain]).then(response => {
		res.redirect('/submit/representatives?id=' + req.query.id)
	}).catch(err => {
		logger.error(err)
		res.render('app/submit/employees/index', {cookie, submission, categories, errors: err})
	})
}
