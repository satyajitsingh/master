'use strict'

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')
const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')

const categories = require('../../../data/config_distribution_categories')

module.exports = (req, res) => {
  	// Get the current submission based on the url query param
  	var cookie = new cookieModel(req)
  	const submission = cookie.getSubmission(req.query.id)

	// Update submission based on form data
	submission.dist0 = req.body['dist-0']
	submission.dist1 = req.body['dist-1']
	submission.dist2 = req.body['dist-2']
	submission.dist3 = req.body['dist-3']

	// Define validation chains
	var chains = []
	for (var i = 0; i < categories.length; i++) {
		var category = categories[i]
		var chain = [
			new ValidationRule(
				validator.notEmpty, 'dist-' + i, req.body['dist-' + i],
				'Please enter the number of trade union representatives who spent ' + category.name + ' of their working hours on facility time'
			),
			new ValidationRule(
				validator.wholeNumber, 'dist-' + i, req.body['dist-' + i], 'Please enter the whole number of trade union representatives who spent ' + category.name + ' of their working hours on facility time'
			),
			new ValidationRule(
				validator.max4DigitsNumber, 'dist-' + i, req.body['dist-' + i], 'Please enter no more than four digits for the number of trade union representatives who spent ' +  category.name + ' of their working hours on facility time')
		]
		chains.push(chain)
	}

	// Validate chains
	validator.validateChains(chains).then(response => {
		res.redirect('/submit/cost?id=' + req.query.id);
	}).catch(err => {
		logger.error(err)
		res.render('app/submit/distribution/index', {cookie, submission, categories, errors: err})
	});

}