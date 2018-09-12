'use strict'

module.exports = {

  /**
   * Determines whether the given email ends in one
   * of our known public sector suffixes
   *
   * @param {String} email
   * @returns {boolean}
   */
  hasPublicSectorSuffix: function (email) {
    const suffixes = [
      'ac.uk', 'gov.uk', 'police.uk', 'nhs.uk', 'nhs.net',
      'sch.uk', 'gov.scot', 'gov.wales', 'mod.uk', 'mil.uk'
    ]
    return this.hasSuffix(email, suffixes)
  },

  /**
   * @returns {}
   */
  hasSuffixes: function(email, suffixes) {
    if (email && suffixes) {
      var s = suffixes.split(',')
      return this.hasSuffix(email, s)
    }
  },

  /**
   * @returns {}
   */
  hasSuffix: function (email, suffixes) {
    if (email && suffixes) {
      for (var i = 0; i < suffixes.length; i++) {
        if (email.endsWith(suffixes[i]) === true) {
          console.log(email + ' ends in ' + suffixes[i])
          return true
        }
      }
    }
    return false
  }

}
