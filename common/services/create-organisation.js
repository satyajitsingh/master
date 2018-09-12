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
  create: function (name, sectorId) {

    return new Promise(function (resolve, reject) {

      db.sequelize.transaction(function(t){
        return db.organisation.findOrCreate({
          where: {
            Name: name
          }, 
          defaults: {
            SectorTypeId: sectorId,
            IsSeeded: false
          },
          transaction: t
        })
        // necessary to use spread to find out if user was found or created
        .spread(function(organisation, created){
             resolve(organisation)
        });
      }).catch(function (err) {
        logger.error(err)
        reject(err)
      })

    })
  }

}
