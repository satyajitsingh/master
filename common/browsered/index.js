'use strict'

/* eslint-env node, browser */

import accessibleAutocomplete from 'accessible-autocomplete'

const calculateFieldService = require('../services/calculate-field')

// Organisation field
var organisationFieldContainer = document.getElementById('form-field-organisation-container')
var organisationIdParam = document.getElementById('form-param-organisation-id')
var organisations = {}

// Percentage spend calculated field
var calcSpendGroup = document.getElementById('calculated-group-spend')
var calcSpendField = document.getElementById('calculated-field-spend')
var payField = document.getElementById('form-field-pay')
var costField = document.getElementById('form-field-cost')

// Percentage hours calculated field
var calcHoursGroup = document.getElementById('calculated-group-hours')
var calcHoursField = document.getElementById('calculated-field-hours')
var facilityField = document.getElementById('form-field-facility')
var activitiesField = document.getElementById('form-field-activities')

/**
 * Updates the percentage spend calculated field based
 * dependent fields
 */
var updatePercentageSpend = function() {

    if (payField.value != '' && costField.value != '') {
        var calculatedSpend = calculateFieldService.percentageSpend(payField.value, costField.value)
        if (calculatedSpend) {
          calcSpendGroup.style.display = 'block'
          calcSpendField.textContent = calculatedSpend + '%'
          return
        }
    }

  calcSpendGroup.style.display = 'none'
  calcSpendField.textContent = ''
}

/**
 * Updates the percentage hours calculated field based
 * dependent fields
 */
var updatePercentageHours = function() {
    if (facilityField.value !== '' && activitiesField.value !== '') {
        var calculatedHours = calculateFieldService.percentageHours(facilityField.value, activitiesField.value)
        if (calculatedHours) {
          calcHoursGroup.style.display = 'block'
          calcHoursField.textContent = calculatedHours + '%'
          return
        }
    }
    calcHoursGroup.style.display = 'none'
    calcHoursField.textContent = ''
}

/**
 * Initialises the percentage spend calculated field
 */
var initPercentageSpendCalculatedField = function() {
  calcSpendGroup.style.display = 'none'
  // Configure event listeners on dependent fields
  payField.addEventListener('input', updatePercentageSpend)
  costField.addEventListener('input', updatePercentageSpend)
}

/**
 * Initialises the percentage hours calculated field
 */
var initPercentageHoursCalculatedField = function() {
  calcHoursGroup.style.display = 'none'
  // Configure event listeners on dependent fields
  facilityField.addEventListener('input', updatePercentageHours)
  activitiesField.addEventListener('input', updatePercentageHours)
}

/**
 * Updates organisation suggestions given a query
 */
var updateOrganisationSuggestions = function(query, populateResults) {
  
  // Make HTTP request to organisation API
  var request = new XMLHttpRequest()
  if (request.overrideMimeType) {
    request.overrideMimeType('application/json')
  }
  request.addEventListener('load', function() {

    // Parse and prepare results for display
    var results = []
    if (request && request.responseText) {
      var newOrganisations = JSON.parse(request.responseText)
      for (var i = 0; i < newOrganisations.length; i++) {
        var newOrg = newOrganisations[i]
        // Add result to local dictionary cache
        organisations[newOrg.name] = {
          id: newOrg.id,
          name: newOrg.name,
          region: newOrg.region
        }
        // Add result to results
        results.push(newOrg.name)
      }
      populateResults(results)
    }
  })

  // Initiate request
  request.open('GET', '/api/organisations?q=' + query)
  request.send();
}

/**
 * Called when a user selects an organisation
 */
var organisationSelected = function(selection) {

  var org = organisations[selection]
  if (org) {
    organisationIdParam.value = org.id
  }
}

/**
 * Returns the suggest item template
 */
var suggestItemTemplate = function(org) {
  var org = organisations[org]
  if (org) {
    if (org.region) {
      return '<p class="organisation">' + org.name + '</p><p>' + org.region + '</p>'
    }
    return '<p class="organisation">' + org.name + '</p>'
  }
}

/**
 * Initialises the organisation autocomplete
 */
var initOrganisationAutocomplete = function() {

  // Empty contents of container - this contains input element for non-js support
  organisationFieldContainer.innerHTML = ''

  // Initialise autocomplete
  accessibleAutocomplete({
    element: organisationFieldContainer,
    id: 'form-field-organisation',
    name: 'organisation',
    source: updateOrganisationSuggestions,
    autoselect: true,
    showNoOptionsFound: false,
    displayMenu: 'overlay',
    minLength: 2,
    onConfirm: organisationSelected,
    templates: {
      suggestion: suggestItemTemplate
    }
  })

  // Reset the organisation param when text changes
  var ac = document.getElementById('form-field-organisation')
  ac.spellcheck = false
  ac.addEventListener('input', function() {
    organisationIdParam.value = ''
  })

}

if (organisationFieldContainer) {
  initOrganisationAutocomplete()
}

if (calcSpendGroup) {
  initPercentageSpendCalculatedField()
}
if (calcHoursGroup) {
  initPercentageHoursCalculatedField()
}