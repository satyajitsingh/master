
'use strict'

const index = require('./index')
// Local dependencies
const healthcheck = require('./api/healthcheck')
const organisations = require('./api/organisations')

// Registration dependencies
const registerOrganisation = require('./register/organisation')
const registerSector = require('./register/sector')
const registerContact = require('./register/contact')
const registerConfirm = require('./register/confirm')

// Verify dependency
const verify = require('./verify')

// Submission dependencies
const submitScope = require('./submit/scope')
const submitEmployees = require('./submit/employees')
const submitReps = require('./submit/representatives')
const submitCost = require('./submit/cost')
const submitHours = require('./submit/hours')
const submitDistribution = require('./submit/distribution')
const submitCheck = require('./submit/check')
const submitConfirmation = require('./submit/confirmation')

// Misc dependency
const cookies = require('./cookies')
const terms = require('./terms')
const error = require('./error')

// Export
module.exports.bind = app => {
  app.use(healthcheck.router)
  app.use(organisations.router)
  app.use(index.router)
  app.use(registerOrganisation.router)
  app.use(registerSector.router)
  app.use(registerContact.router)
  app.use(registerConfirm.router)
  app.use(submitScope.router)
  app.use(submitEmployees.router)
  app.use(submitReps.router)
  app.use(submitCost.router)
  app.use(submitHours.router)
  app.use(submitDistribution.router)
  app.use(submitCheck.router)
  app.use(submitConfirmation.router)
  app.use(verify.router)
  app.use(cookies.router)
  app.use(terms.router)
  app.use(error.router)
}

