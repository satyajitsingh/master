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

	// Parse as currency (string)
  	const pay = calculateFieldService.parseCurrency(req.body.pay)
  	const cost = calculateFieldService.parseCurrency(req.body.cost)

  	// Add to cookie
  	submission.pay = pay
	submission.cost = cost

	// Define a validation chain for our representatives field
	const payChain = [
		new ValidationRule(validator.notEmpty, 'pay', pay, 'Please enter the total pay bill'),
		new ValidationRule(validator.moreThanZero, 'pay', pay, 'Please enter a number that is more than zero for the total pay bill'),
		new ValidationRule(validator.currency, 'pay', pay, 'Please enter the total pay bill in pounds sterling to two decimal places e.g. 1,000,000.00')
	]

	// Define a validation chain for our FTEs field
	const costChain = [
		new ValidationRule(validator.notEmpty, 'cost', cost, 'Please enter the total cost of facility time'),
		new ValidationRule(validator.currency, 'cost', cost, 'Please enter the total cost of facility time in pounds sterling to two decimal places e.g. 500,000.00'),
		new ValidationRule(validator.xlessthanyCheck, 'cost', cost - pay, 'The total cost of facility time cannot exceed the total pay bill')
	]

	// Validate chains
	validator.validateChains([payChain, costChain]).then(response => {

		// Calculate hours percentage and store
		var calculatedSpend = calculateFieldService.percentageSpend(pay, cost)
		if (calculatedSpend) {
			submission.cost_p = calculatedSpend
		} else {
			submission.cost_p = '0'
		}

		res.redirect('/submit/hours?id=' + req.query.id);
	}).catch(err => {
		logger.error(err)
		res.render('app/submit/cost/index', { cookie, submission, errors: err })
	});

}