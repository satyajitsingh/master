'use strict'

const logger = require('../utils/logger')
const db = require('./db')

module.exports = {

  /**
   * @param {String} user
   * @param {String} token
   * @returns {Boolean}
   */
  match: function (sectorId) {
    
    return new Promise(function (resolve, reject) {
        db.sectorType.findOne({
          where:{
            Id:[sectorId],
          }
        }).then(sector => {
          resolve(sector)
        }).catch(function (err) {
          logger.error(err)
          reject(err)
        })

    })
  },

  /**
   */
  get: function () {

    return new Promise(function (resolve, reject) {
      // Find all SectorTypes
      db.sectorType.findAll(
        {
          attributes: ['Id','Name', 'Index', 'EmailSuffixes'],
          order: [['Index', 'ASC']]
        }
      ).then(sectorTypes => {
        resolve(sectorTypes)
      }).catch(function (err) {
        logger.error(err)
        reject(err)
      })

    })
  }

}
