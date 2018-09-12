'use strict'

var assert = require('assert')

const validator = require('../../../common/utils/validator')

describe('validator', function() {

  describe('#wholeNumber()', function() {

    it('should return true for whole numbers', function() {
      assert.equal(validator.wholeNumber('0'), true)
      assert.equal(validator.wholeNumber('100'), true)
      assert.equal(validator.wholeNumber('8,000'), true)
      assert.equal(validator.wholeNumber('102,423'), true)
      assert.equal(validator.wholeNumber('10,000,000'), true)
      assert.equal(validator.wholeNumber('120,320,320'), true)
    })

    it('should return false for numbers with decimals', function() {
      assert.equal(validator.wholeNumber('0.54'), false)
      assert.equal(validator.wholeNumber('1.00'), false)
      assert.equal(validator.wholeNumber('0.54'), false)
      assert.equal(validator.wholeNumber('10.00'), false)
      assert.equal(validator.wholeNumber('123.00'), false)
      assert.equal(validator.wholeNumber('100.293'), false)
      assert.equal(validator.wholeNumber('1,000.00'), false)
      assert.equal(validator.wholeNumber('1,000.43'), false)
      assert.equal(validator.wholeNumber('1,000,000.54'), false)
      assert.equal(validator.wholeNumber('29,329,927.91'), false)
    })

  })

  describe('#currency()', function() {

    it('should return true for valid currency', function() {
      assert.equal(validator.currency('0'), true)
      assert.equal(validator.currency('1'), true)
      assert.equal(validator.currency('100'), true)
      assert.equal(validator.currency('19,382'), true)
      assert.equal(validator.currency('1,000.00'), true)
      assert.equal(validator.currency('45,223.02'), true)
      assert.equal(validator.currency('100,000,000.00'), true)
    })

    it('should return false for invalid currency', function() {
      assert.equal(validator.currency('.0'), false)
      assert.equal(validator.currency('£1'), false)
      assert.equal(validator.currency('100.000'), false)
      assert.equal(validator.currency('1,00,000'), false)
      assert.equal(validator.currency('19,382,00'), false)
    })

  })

})
