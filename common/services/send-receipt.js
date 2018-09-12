'use strict'

const logger = require('../utils/logger')
const notify = require('notifications-node-client')
const config = require('../config/index')

if (config.NOTIFY_API_KEY === null) {
  throw new Error('Mandatory environment variable for GOV.UK Notify not set')
}

// Instantiate a new Notify client
const notifyClient = new notify.NotifyClient(config.NOTIFY_API_KEY)

module.exports = {

  send: function(email, firstName, lastName, submission, organisationName) {
    return this.sendExternal(email, firstName, lastName, submission, organisationName)
      .then(this.sendInternal(email, firstName, lastName, submission, organisationName))
  },

  /**
   * @param {String} user
   * @param {String} token
   * @returns {Boolean}
   */
  sendExternal: function (email, firstName, lastName, submission, organisationName) {

    var combinatedOrganisationName = organisationName
    var functionName = submission.functionname
    if (functionName) {
      combinatedOrganisationName = combinatedOrganisationName + ' (' + functionName + ')'
    }

    return new Promise( function(resolve, reject) {
    	notifyClient
			.sendEmail(config.NOTIFY_RECEIPT_TEMPLATE_ID, email,
        {
          personalisation: { 
            first_name: firstName,
            reference: submission.id,
            organisation: combinatedOrganisationName, 
            period: config.REPORTING_PERIOD,
            employees: submission.employees, 
            reps: submission.reps,
            ftes: submission.ftes,
            dist_0: submission.dist0, 
            dist_1: submission.dist1,
            dist_2: submission.dist2,
            dist_3: submission.dist3,
            pay: submission.pay,
            cost: submission.cost,
            cost_percent: submission.cost_p,
            facility: submission.facility,
            activities: submission.activities,
            hours_percent: submission.hours_p
          }
        }
      ).then(response => resolve(response))
    	.catch(err => {
        logger.error(err)
        reject(err)
      })
    })
  },

  /**
   * @param {String} user
   * @param {String} token
   * @returns {Boolean}
   */
  sendInternal: function (email, firstName, lastName, submission, organisationName) {

    var combinatedOrganisationName = organisationName
    var functionName = submission.functionname
    if (functionName) {
      combinatedOrganisationName = combinatedOrganisationName + ' (' + functionName + ')'
    }

    return new Promise( function(resolve, reject) {
      notifyClient
      .sendEmail(config.NOTIFY_INTERNAL_TEMPLATE_ID, config.CONTACT_EMAIL,
        {
          personalisation: { 
            first_name: firstName,
            last_name: lastName,
            email: email,
            reference: submission.id,
            organisation: combinatedOrganisationName, 
            period: config.REPORTING_PERIOD,
            employees: submission.employees, 
            reps: submission.reps,
            ftes: submission.ftes,
            dist_0: submission.dist0, 
            dist_1: submission.dist1,
            dist_2: submission.dist2,
            dist_3: submission.dist3,
            pay: submission.pay,
            cost: submission.cost,
            cost_percent: submission.cost_p,
            facility: submission.facility,
            activities: submission.activities,
            hours_percent: submission.hours_p
          }
        }
      ).then(response => resolve(response))
      .catch(err => {
        logger.error(err)
        reject(err)
      })
    })
  }
}
