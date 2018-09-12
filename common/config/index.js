'use strict'

exports.BASE_URL = process.env.BASE_URL
exports.CONTACT_EMAIL = 'facilitytime@cabinetoffice.gov.uk'
exports.REPORTING_PERIOD = '1 April 2017 to 31 March 2018'

exports.CORRELATION_HEADER = process.env.CORRELATION_HEADER_NAME || 'x-request-id'
exports.CONNECTOR_URL = process.env.CONNECTOR_URL

exports.NOTIFY_API_KEY = process.env.NOTIFY_API_KEY
exports.NOTIFY_TOKEN_TEMPLATE_ID = '692cb0b2-c4cb-4746-a713-009fe0a5aa98'
exports.NOTIFY_RECEIPT_TEMPLATE_ID = '3bc1e2ab-59d4-438e-b896-499f9c811fd6'
exports.NOTIFY_INTERNAL_TEMPLATE_ID = '2bc9954d-e07f-44e7-a691-e53d8d1400fd'

exports.TOKEN_SECRET =  process.env.TOKEN_SECRET

exports.DATABASE_NAME = process.env.DATABASE_NAME || 'facilitytime'
exports.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost'
exports.DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'postgres'
exports.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'pass123'
exports.DATABASE_PORT = process.env.DATABASE_PORT || 5432
exports.DATABASE_DIALECT = process.env.DATABASE_DIALECT || 'postgres'

exports.FLAGPOLE_MAINTENANCE = process.env.FLAGPOLE_MAINTENANCE
exports.LOG_LEVEL = process.env.LOG_LEVEL