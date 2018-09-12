'use strict'

const cookieModel = require('../../../common/models/Cookie.class')
const categories = require('../../../data/config_employees_categories')

module.exports = (req, res) => {

  // Get the current submission based on the url query param
  var cookie = new cookieModel(req)
  const submission = cookie.getSubmission(req.query.id)

  res.render('app/submit/employees/index', {cookie, submission, categories})
}
