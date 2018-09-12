'use strict'

const cookieModel = require('../../../common/models/Cookie.class')

module.exports = (req, res) => {

	var cookie = new cookieModel(req)

	res.render('app/register/confirm/index', { cookie })
}
