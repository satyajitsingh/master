'use strict'

var assert = require('assert')

const calculateField = require('../../../common/services/calculate-field')

describe('calculate-field', function() {

  describe('#parseHours()', function() {

    it('should return valid hours', function() {
      assert.equal(calculateField.parseHours('0'), 0)
      assert.equal(calculateField.parseHours('0.50'), 0.50)
      assert.equal(calculateField.parseHours('100'), 100)
      assert.equal(calculateField.parseHours('1000'), 1000)
      assert.equal(calculateField.parseHours('1,000'), 1000)
      assert.equal(calculateField.parseHours('120,000'), 120000)
      assert.equal(calculateField.parseHours('293,029,000'), 293029000)
      assert.equal(calculateField.parseHours('120,000d'), 120000)
      assert.equal(calculateField.parseHours('£120,000'), 120000)
    })

  })

  describe('#parseCurrency()', function() {

    it('should return valid hours', function() {
      assert.equal(calculateField.parseCurrency('£10.00'), '10.00')
      assert.equal(calculateField.parseCurrency('£10,00'), '1000')
      assert.equal(calculateField.parseCurrency('00'), '00')
      assert.equal(calculateField.parseCurrency('£100,000.023'), '100000.023')
    })

  })

  describe('#percentageSpend()', function() {

    it('should return valid percentage', function() {
      assert.equal(calculateField.percentageSpend('100', '50'), 50.00)
      assert.equal(calculateField.percentageSpend('10,000', '5,000'), 50.00)
      assert.equal(calculateField.percentageSpend('29,000', '12,392'), 42.73)
      assert.equal(calculateField.percentageSpend('8,000,000', '23,320'), 0.29)
      assert.equal(calculateField.percentageSpend('9,000,000.23', '43,403.20'), 0.48)
      assert.equal(calculateField.percentageSpend('50', '100'), 200.00)
    })

    it('should return null for invalid numbers', function() {
      assert.equal(calculateField.percentageSpend('0', '50,00,00'), null)
    })

  })

})
