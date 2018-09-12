'use strict'

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')
const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')

module.exports = (req, res) => {

	// Start by clearing cookies and initialising
	var cookie = new cookieModel(req)
	cookie.reset()
	cookie.initialise()

  	// Get form elements
	var organisationId = req.body['organisation-id']
	var organisationName = req.body['organisation']

	// Define a validation chain for our organisation field
	const organisationChain = [
		new ValidationRule(validator.notEmpty, 'organisation', req.body['organisation'], 'Please tell us the name of your organisation')
	]

	// Validate chains
	validator.validateChains([organisationChain]).then(response => {

		if (organisationId && organisationId != '') {
			// Initialise cookie with an id and name of organisation
			cookie.setOrganisationId(organisationId)
			cookie.setOrganisationName(organisationName)
	  		res.redirect('/register/contact');
		} else {
			// Initialise cookie with the name of a new organisation
			cookie.setOrganisationId(null)
			cookie.setOrganisationName(organisationName)
	  		res.redirect('/register/sector');
		}

	}).catch(err => {
		logger.error(err)
		res.render('app/register/organisation/index', { errors: err })
	});

}