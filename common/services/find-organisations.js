'use strict'

const logger = require('../utils/logger')

const db = require('./db')

module.exports = {

  /**
   */
  get: function (query) {

    return new Promise(function (resolve, reject) {

      db.organisation.findAll({
        attributes: ['Id', 'Name', 'Region'],
        where:{
          IsSeeded:[true],
          Name: {
            [db.op.iLike]: '%' + query + '%'
          }
        },
        limit: 5
      }).then(orgs => {
        resolve(orgs)
      }).catch(function (err) {
        logger.error(err)
        reject(err)
      })

    })
  }

}
