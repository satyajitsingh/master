'use strict'

const logger = require('../../../common/utils/logger')

const cookieModel = require('../../../common/models/Cookie.class')

const createSubmissionService = require('../../../common/services/create-submission')
const sendReceiptService = require('../../../common/services/send-receipt')

module.exports = (req, res) => {
  	// Get the current submission based on the url query param
  	var cookie = new cookieModel(req)
  	const submission = cookie.getSubmission(req.query.id)

	// Get the ip address
	const ip = req.header('x-forwarded-for')

	createSubmissionService.create(cookie.getUserToken(), cookie.getOrganisationId(), submission, ip)
		.then(response => {

			sendReceiptService.send(
				cookie.getUserEmail(),
				cookie.getUserFirstName(),
				cookie.getUserLastName(),
				submission,
				cookie.getOrganisationName())
			.then(response => {
					res.redirect('/submit/confirmation?id=' + req.query.id);
			}).catch(err => {
					logger.error(err)
					res.redirect('/error/500');
			})

		})
		.catch(err => {
			logger.error(err)
			res.redirect('/error/500');
		}
	)

}
