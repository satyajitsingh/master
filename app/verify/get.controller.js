'use strict'

const logger = require('../../common/utils/logger')

const cookieModel = require('../../common/models/Cookie.class')
const validateTokenService = require('../../common/services/validate-token')
const getOrganisationService = require('../../common/services/get-organisation')

module.exports = (req, res) => {

  // Start by clearing cookies and initialising
  var cookie = new cookieModel(req)
  cookie.reset()
  cookie.initialise()

  // Look up and validate token, checking it hasn't expired
  const token = req.query.token

  var validatedToken = null
  
  validateTokenService.validate(token).then(secureToken => {
    
    validatedToken = secureToken
    return getOrganisationService.get(secureToken.get('OrganisationId'))  

  }).then(function(organisation) {
    
    // Re-initialise the user cookie elements based on database values
    cookie.setUserToken(validatedToken.get('Id'))
    cookie.setUserFirstName(validatedToken.get('FirstName'))
    cookie.setUserLastName(validatedToken.get('LastName'))
    cookie.setUserEmail(validatedToken.get('Email'))

    // Re-initialise the organisation cookie elements based on database values
    cookie.setOrganisationId(organisation.get('Id'))
    cookie.setOrganisationName(organisation.get('Name'))
    cookie.setOrganisationSector(organisation.get('SectorTypeId'))

    // Initialise new submission and redirect
    const submissionId = cookie.addSubmission()

    // If Local Authority, redirect to scope selection, otherwise to employees
    if (organisation.get('SectorTypeId') === '562cbf2b-8818-4983-80d1-df1ff6fea5e5') {
      res.redirect('/submit/scope?id=' + submissionId)
    } else {
      res.redirect('/submit/employees?id=' + submissionId)
    }

  }).catch(err => {
    logger.error(err)
    res.render('app/verify/index')
  })
}
