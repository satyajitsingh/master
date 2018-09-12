'use strict'

const cookieModel = require('../models/Cookie.class')

module.exports = (req, res, next) => {

  const cookie = new cookieModel(req)
  const token = cookie.getUserToken()
  
  if (token == null) {
    res.redirect('/error/401');
  } else {
    next()
  }
}
