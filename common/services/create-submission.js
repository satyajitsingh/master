'use strict'

const logger = require('../utils/logger')

const db = require('./db')
const config = require('../config/index')

module.exports = {

  /**
   * @param {String} user
   * @param {String} token
   * @returns {Boolean}
   */
  create: function (userToken, organisationId, submission, ipAddress) {

    return new Promise(function (resolve, reject) {

      db.submission.create({
        SecureTokenId: userToken,
        SubmissionReference: submission.id,
        OrganisationId: organisationId,
        FunctionTypeId: submission.function,
        SubmissionPeriod: config.REPORTING_PERIOD,
        ClientIPAddress: ipAddress,
        Employees: submission.employees,
        NumberofRelevantUnionOfficials: submission.reps,
        FullTimeEquivalentEmployees: submission.ftes,
        ZeroPercentTimeSpent: submission['dist0'],
        OnetoFiftyPercentTimeSpent: submission['dist1'],
        FiftyOnetoNinetyNinePercentTimeSpent: submission['dist2'],
        HundredPercentTimeSpent: submission['dist3'],
        TotalPayBill: submission.pay,
        TotalCostofFacilityTime: submission.cost,
        PercentagePayBill: submission.cost_p,
        HoursPaidFacilityTime: submission.facility,
        HoursPaidActivities: submission.activities,
        PercentageTimeSpent:submission.hours_p
      }).then(sub => {
        resolve(sub)
      }).catch(function (err) {
        logger.error(err)
        reject(err)
      })

    })
  }

}
