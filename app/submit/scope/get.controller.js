'use strict'

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')
const getFunctionsService = require('../../../common/services/get-functions')

module.exports = (req, res) => {

  // Get the current submission based on the url query param
  var cookie = new cookieModel(req)
  const submission = cookie.getSubmission(req.query.id)

  // Get functions
  getFunctionsService.get()
    .then(functions => {
      res.render('app/submit/scope/index', {cookie, submission, functions})
    })
    .catch(err => {
      logger.error(err)
      res.render('app/submit/scope/index', {cookie, submission, functions: []})
    }
  )
}
