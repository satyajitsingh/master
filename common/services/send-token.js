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

  /**
   * @param {String} user
   * @param {String} token
   * @returns {Boolean}
   */
  send: function (firstName, email, token) {
    return new Promise(function (resolve, reject) {
    	notifyClient
			.sendEmail(config.NOTIFY_TOKEN_TEMPLATE_ID, email, {personalisation: {
        first_name: firstName,
        token: token,
        base_url: config.BASE_URL
      }}).then(response => resolve(response))
    		.catch(err => {
          logger.error(err)
          reject(err)
        })
    })
  }

}
