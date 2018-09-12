'use strict'

// Npm dependencies
const express = require('express')

// Middleware
const flagpole = require('../../../common/middleware/flagpole')

// Local dependencies
const getController = require('./get.controller')
const postController = require('./post.controller')

// Initialisation
const router = new express.Router()
const indexPath = '/register/sector'
const paths = {
  index: indexPath
}

// Routing
router.get(paths.index, flagpole, getController)
router.post(paths.index, flagpole, postController)

// Export
module.exports = {
  router,
  paths
}
