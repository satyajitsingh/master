'use strict'

const crypto = require('crypto')
const logger = require('../utils/logger')

const db = require('./db')
const config = require('../config/index')

module.exports = {

  generateHash: function(token) {
    // Replace secret string
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
  create: function (rawToken, email, firstName, lastName, organisationId, ipAddress, hasPublicSectorSuffix, hasSectorSuffix, hasOrganisationSuffix) {
    // Hash the raw token
    const hashedToken = this.generateHash(rawToken)

    return new Promise(function (resolve, reject) {

      db.secureToken.create({
        SecureToken: hashedToken,
        Email: email,
        FirstName: firstName,
        LastName: lastName,
        ClientIPAddress: ipAddress,
        OrganisationId: organisationId,
        HasPublicSectorSuffix: hasPublicSectorSuffix,
        HasSectorSuffix: hasSectorSuffix,
        HasOrganisationSuffix: hasOrganisationSuffix
      }).then(secureToken => {
        resolve(secureToken)
      }).catch(function (err) {
        logger.error(err)
        reject(err)
      })

    })
  }

}
