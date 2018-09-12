'use strict'

// Npm dependencies
const express = require('express')

// Middleware
const flagpole = require('../../../common/middleware/flagpole')

// Local dependencies
const getController = require('./get.controller')

// Initialisation
const router = new express.Router()
const indexPath = '/api/organisations'
const paths = {
  index: indexPath
}

// Routing
router.get(paths.index, flagpole, getController)

// Export
module.exports = {
  router,
  paths
}
