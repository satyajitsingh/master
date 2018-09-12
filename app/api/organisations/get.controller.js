'use strict'

const logger = require('../../../common/utils/logger')

const organisationService = require('../../../common/services/find-organisations')

module.exports = (req, res) => {

  // Get the query string
  const query = req.query.q

  // Return JSON
  const organisations = []

  organisationService.get(query)
    .then(response => {
        res.setHeader('Content-Type', 'application/json')
        for (var i = 0; i < response.length; i++) {
          var org = response[i];
          organisations.push({id: org.get('Id'), name: org.get('Name'), region: org.get('Region')})
        }
        res.json(organisations)
    }).catch(err => {
        logger.error(err)
        res.setHeader('Content-Type', 'application/json')
        res.json(organisations)
    }
  )

}
