'use strict'

const crypto = require('crypto')
const moment = require('moment')
const logger = require('../utils/logger')

const db = require('./db')
const config = require('../config/index')

module.exports = {

  generateHash: function(token) {
    var hash = crypto.createHmac('sha256', config.TOKEN_SECRET)
      .update(token)
      .digest('hex')
    return hash;
  },

  /**
   * @param {String} user
   * @param {String} token
   * @returns {Boolean}
   */
  validate: function (rawToken) {
    
    // Hash the raw token
    const hashedToken = this.generateHash(rawToken)

    return new Promise(function (resolve, reject) {

        db.secureToken.findOne({
          where:{
            SecureToken:[hashedToken],
          }
        }).then(secureToken => {

          if (secureToken) {

            // Get the existing timestamp
            var issuedTimestamp = moment(secureToken.get('IssuedTimestamp'))
            // Calculate the expiry
            var expiresTimestamp = issuedTimestamp.clone()
            expiresTimestamp.add(12, 'hours')
            // Determine whether the expiry is before current time
            if (expiresTimestamp.isBefore(moment()) == false) {
              // Return valid token
              resolve(secureToken)
            } else {
              reject()
            }
          } else {
            reject()
          }
        }).catch(function (err) {
          logger.error(err)
          reject(err)
        })

    })
  }

}
