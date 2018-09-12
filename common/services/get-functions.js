'use strict'

const logger = require('../utils/logger')
const db = require('./db')

module.exports = {

  /**
   */
  get: function () {

    return new Promise(function (resolve, reject) {
      db.functionType.findAll(
        {
          attributes: ['Id','Name'],
          order: [['Index', 'ASC']]
        }
      ).then(functionTypes => {
        resolve(functionTypes)
      }).catch(function (err) {
        logger.error(err)
        reject(err)
      })

    })
  }

}
