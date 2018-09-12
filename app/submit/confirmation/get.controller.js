'use strict'

const cookieModel = require('../../../common/models/Cookie.class')


module.exports = (req, res) => {

  	// Get the current submission based on the url query param
  	var cookie = new cookieModel(req)
  	const submission = cookie.getSubmission(req.query.id)

	// Set expiry of cookie to 5 minutes to delete

	res.render('app/submit/confirmation/index', {submission})
}
