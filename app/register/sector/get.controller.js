'use strict'

const cookieModel = require('../../../common/models/Cookie.class')

const sectorService = require('../../../common/services/get-sectors')

module.exports = (req, res) => {
	
  	var cookie = new cookieModel(req)

	sectorService.get()
		.then(response => {
			res.render('app/register/sector/index', { cookie, sectors: response })
		}).catch(err => {
			res.render('app/register/sector/index', { cookie, sectors: [] })
		}
	)

}
