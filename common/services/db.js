'use strict'

const logger = require('../utils/logger')

const config = require('../config/index')

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DATABASE_NAME, config.DATABASE_USERNAME, config.DATABASE_PASSWORD, {
  host: config.DATABASE_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: logger.debug
})

module.exports.Sequelize = Sequelize
module.exports.sequelize = sequelize
module.exports.sectorType = require('../models/SectorType')(sequelize, Sequelize)
module.exports.functionType = require('../models/FunctionType')(sequelize, Sequelize)
module.exports.organisation = require('../models/Organisation')(sequelize, Sequelize)
module.exports.secureToken = require('../models/SecureToken')(sequelize, Sequelize)
module.exports.submission = require('../models/Submission')(sequelize, Sequelize)

module.exports.op = Sequelize.Op