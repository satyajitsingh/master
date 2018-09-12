'use strict'

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')
const getFunctionsService = require('../../../common/services/get-functions')

const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')

module.exports = (req, res) => {
	// Get the current submission based on the url query param
	var cookie = new cookieModel(req)
	var submission = cookie.getSubmission(req.query.id)
	submission.function = req.body['function']

	// Define a validation chain for our representatives field
	const employeesChain = [
		new ValidationRule(validator.notEmpty, 'function', req.body.function, 'Please tell us which function you are reporting on behalf of')
	]

	// Get the functions
	getFunctionsService.get()
	    .then(functions => {

	    	// Find the name of the function and store in cookie
	    	for (var i = 0; i < functions.length; i++) {
	    		const functObj = functions[i]
	    		if (functObj.get('Id') === req.body['function']) {
	    			submission.functionname = functObj.get('Name')
	    		}
	    	}
	    	
	    	// Validate chains
			validator.validateChains([employeesChain]).then(response => {
				res.redirect('/submit/employees?id=' + req.query.id)
			}).catch(err => {
				logger.error(err)
				res.render('app/submit/scope/index', {cookie, submission, functions, errors: err})
			})
	    })
	    .catch(err => {
	      logger.error(err)
	      res.render('app/submit/scope/index', {cookie, submission, functions: []})
	    }
	 )
}
