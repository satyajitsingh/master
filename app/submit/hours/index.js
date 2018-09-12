'use strict'

// Npm dependencies
const express = require('express')

// Middleware
const auth = require('../../../common/middleware/auth')
const flagpole = require('../../../common/middleware/flagpole')

// Local dependencies
const getController = require('./get.controller')
const postController = require('./post.controller')

// Initialisation
const router = new express.Router()
const indexPath = '/submit/hours'
const paths = {
  index: indexPath
}

// Routing
router.get(paths.index, flagpole, auth, getController)
router.post(paths.index, flagpole, auth, postController)

// Export
module.exports = {
  router,
  paths
}
