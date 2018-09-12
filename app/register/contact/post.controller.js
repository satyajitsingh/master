'use strict'

const nanoid = require('nanoid/generate');

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')
const ValidationRule = require('../../../common/models/ValidationRule.class')
const validator = require('../../../common/utils/validator')
const createTokenService = require('../../../common/services/create-token')
const createOrganisationService = require('../../../common/services/create-organisation')
const sendTokenService = require('../../../common/services/send-token')
const checkSuffixService = require('../../../common/services/check-suffix')
const getSectorsService = require('../../../common/services/get-sectors')

module.exports = (req, res,next) => {

	// Generate a token for the user
	const alphabet = '23456789abcdefghjkmnpqrstuvwxyz-'
  const token = nanoid(alphabet, 13)

  // Get the ip address
  const ip = req.header('x-forwarded-for')

	var firstName = req.body['first-name']
	var lastName = req.body['last-name']
	var email = req.body['email']
	var consent = req.body['consent']

	// Update the cookie
	var cookie = new cookieModel(req)
	cookie.setUserFirstName(firstName)
	cookie.setUserLastName(lastName)
	cookie.setUserEmail(email)

	// Define validation chains for our fields
	const fnameChain = [
		new ValidationRule(validator.notEmpty, 'first-name', firstName, 'Please enter your first name')
	]
	const lnameChain = [
		new ValidationRule(validator.notEmpty, 'last-name', lastName, 'Please enter your last name')
	]
	const emailChain = [
		new ValidationRule(validator.notEmpty, 'email', email, 'Please enter your work email address'),
		new ValidationRule(validator.email, 'email', email, 'Please enter a valid email address')
	]
	const consentChain = [
		new ValidationRule(validator.notEmpty, 'consent', consent, 'Please consent to the use of your personal data')
	]

  // Define variables required through promise chain
  var organisation = null
  var sector = null

  // Validate chains
  validator.validateChains([fnameChain, lnameChain, emailChain, consentChain]).then(response => {

    // Find an existing organisation or create a new one 
    return createOrganisationService.create(cookie.getOrganisationName(), cookie.getOrganisationSector())

  }).then(organisationResult => {

    // Update cookie with organisation id
    var newOrgId = organisationResult.get('Id')
    cookie.setOrganisationId(newOrgId)
    
    // Find the sector
    organisation = organisationResult
    return getSectorsService.match(organisationResult.get('SectorTypeId'))

  }).then(sectorResult => {

    // Do the suffix check
    sector = sectorResult
    var hasPublicSectorSuffix = checkSuffixService.hasPublicSectorSuffix(email)
    var hasOrganisationSuffix = checkSuffixService.hasSuffixes(email, organisation.get('EmailSuffixes'))
    var hasSectorSuffix = checkSuffixService.hasSuffixes(email, sector.get('EmailSuffixes'))

    // Create the secure token
    return createTokenService.create(
      token,
      email,
      firstName,
      lastName,
      cookie.getOrganisationId(),
      ip,
      hasPublicSectorSuffix, 
      hasSectorSuffix,
      hasOrganisationSuffix
    )

  }).then(secureToken => {

    // Send the token email
    return sendTokenService.send(firstName, email, token)

  }).then(response => {

    res.redirect('/register/confirm')

  }).catch(err => {
    logger.error(err)
    res.render('app/register/contact/index', { cookie, errors: err })
  });

}