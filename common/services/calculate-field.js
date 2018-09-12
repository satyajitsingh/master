'use strict'

const currency = require('currency.js')

const validator = require('../utils/validator')

module.exports = {

  /**
   * Takes a string representation of "hours" and returns a float
   *
   * @param {string} hours
   * @returns {float}
   */
  parseHours: function(hours) {
    var s = String(hours)
    // Remove everything other than numbers and periods
    var r = s.replace(/[^0-9.]/g , '')
    // Parse as float
    return parseFloat(r)
  },

  /**
   * Takes a string representation of "hours" and returns a string
   *
   * @param {string} hours
   * @returns {string}
   */
  parseCurrency: function(currency) {
    var s = String(currency)
    // Remove everything other than numbers and periods
    var r = s.replace(/[^0-9.]/g , '')
    // Parse as string
    return String(r)
  },

  /**
   * Calculates the percentage spend given two currency values
   *
   * @param {string} pay
   * @param {string} cost
   * @returns {float}
   */
  percentageSpend: function (pay, cost) {
    var p = this.parseCurrency(pay)
    var c = this.parseCurrency(cost)

    // Use our validator to check the structure of the values
    if (validator.currency(p) === true && validator.currency(c) === true) {
      // Use currency.js to parse
      const payC = currency(p)
      const costC = currency(c)
      // Calculate percentage to decimal points
      const calc = ((costC / payC) * 100).toFixed(2)
      // Return if sensible
      if (isNaN(calc) == false && calc != Infinity) {
        return calc
      }
    }
  },

  /**
   * Calculates the percentage hours given two time values
   *
   * @param {string} facility
   * @param {string} activities
   * @returns {float}
   */
  percentageHours: function (facility, activities) {
    var ft = this.parseHours(facility)
    var at = this.parseHours(activities)

    // Use our validator to check the structure of the values
    if (ft >= 0 && at >= 0 ) {
      // Calculate percentage to decimal points
      var r = ((at / ft) * 100).toFixed(2)
      // Return if sensible
      if (isNaN(r) == false && r != Infinity) {
        return r
      }
    }
  }

}