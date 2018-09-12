'use strict'

const logger = require('../utils/logger')

const db = require('./db')
const config = require('../config/index')

module.exports = {

  /**
   * @param {String} user
   * @param {String} token
   * @returns {Boolean}
   */
  get: function (organisationId) {
    
    return new Promise(function (resolve, reject) {
        db.organisation.findOne({
          where:{
            Id:[organisationId],
          }
        }).then(organisation => {
          resolve(organisation)
        }).catch(function (err) {
          logger.error(err)
          reject(err)
        })

    })
  }

}
