'use strict'

module.exports = {
  notEmpty,
  decimal,
  email,
  wholeNumber,
  currency,
  max4DigitsNumber,
  xlessthanyCheck,
  moreThanZero,
  notInfinity,
  validateChains
}

function notEmpty(value) {
  if (value === undefined) {
    return false
  }
  if (value === null) {
    return false
  }
  if (value === '') {
    return false
  }
  //check for space at start
  if(/^\s/.test(value))
  {
    return false
  }
  //check for only symbols
  if(/^[^a-zA-Z0-9]+$/.test(value)){
    return false
  }
  return true
}

function email(value) {
  const regex = /^^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
  return regex.test(value)
}

function max4DigitsNumber(value) {
  return (value <= 9999)
}

function xlessthanyCheck(value) {
  return (value <=0)
}

function moreThanZero(value) {
  return (value >0)
}

function notInfinity(value) {
  return isFinite(value)
}

function wholeNumber(value) {
  const regex = /^((0|[1-9]{1}\d{0,2},(\d{3},)*\d{3})|([1-9]{1}\d{0,}))$/
  return regex.test(value)
}

function decimal(value) {
  const regex = /^[-+]?(\d?\d?\d?,?)?(\d{3}\,?)*(\.\d{1,2})?$/
  return regex.test(value)
}

function currency(value) {
  const regex = /^\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?$/
  return regex.test(value)
}

function validateChains(chains) {
  return new Promise(function(resolve, reject) {
    const failedRules = []
    for (var i = 0; i < chains.length; i++) {
      const rules = chains[i]
      for (var x = 0; x < rules.length; x++) {
        const rule = rules[x]
        if (rule.validator(rule.value) === false) {
          failedRules.push(rule)
          break
        }
      }
    }
    if (failedRules.length === 0) {
      resolve()
    } else {
      reject(failedRules)
    }
  })
}