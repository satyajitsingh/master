'use strict'

const logger = require('../../../common/utils/logger')

const sectorService = require('../../../common/services/get-sectors')
const createOrganisationService = require('../../../common/services/create-organisation')
const cookieModel = require('../../../common/models/Cookie.class')
const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')

module.exports = (req, res) => {
	
  	// Get form elements
	var sectorId = req.body['sector']
	// Update cookie with sector
	// Get the current submission based on the url query param
  	var cookie = new cookieModel(req)
  	const submission = cookie.getSubmission(req.query.id)
	cookie.setOrganisationSector(sectorId)

	// Define a validation chain for our sector field
	const sectorChain = [
		new ValidationRule(validator.notEmpty, 'sector', sectorId, 'Please tell us the primary sector of your organisation')
	]

	// Validate chains
	validator.validateChains([sectorChain]).then(response => {

		res.redirect('/register/contact');
			
	}).catch(err => {
		logger.error(err)

		sectorService.get()
			.then(sectors => {
				res.render('app/register/sector/index', { cookie, sectors, errors: err })
			}).catch(err => {
				res.render('app/register/sector/index', { cookie, sectors: [], errors: err })
			}
		)
	});

}
