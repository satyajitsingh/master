'use strict'

const nanoid = require('nanoid/generate');

/**
 */
class Cookie {

  /**
   * 
   */
  constructor (request) {
    if (request == null) {
      throw new Error('Request required by cookie')
    }
    if (request.session == null) {
      throw new Error('Session required by cookie')
    }
    this.session = request.session

    this.initialise()
  }

  initialise() {
    // Initialise organisation
    if (this.session.o == null) {
      this.session.o = {
        i: null,
        n: null
      }
    }
    // Initialise submission
    if (this.session.s == null) {
      this.session.s = []
    }

    // Initialise user
    if (this.session.u == null) {
      this.session.u = {
        t: null,
        fn: null,
        ln: null,
        e: null
      }
    }
  }

  /**
   * 
   */
  reset() {
    this.session.o = null
    this.session.s = null
    this.session.u = null
  }

  /**
   * 
   */
  getOrganisationId() {
    return this.session.o.i
  }

  /**
   * 
   */
  setOrganisationId(id) {
    this.session.o.i = id
  }

  /**
   * 
   */
  getOrganisationName() {
    return this.session.o.n
  }

  /**
   * 
   */
  setOrganisationName(name) {
    this.session.o.n = name
  }

  /**
   * 
   */
  getOrganisationSector() {
    return this.session.o.s
  }

  /**
   * 
   */
  setOrganisationSector(sector) {
    this.session.o.s = sector
  }

  /**
   * 
   */
  getUserToken() {
    return this.session.u.t
  }

  /**
   * 
   */
  setUserToken(token) {
    this.session.u.t = token
  }

  /**
   * 
   */
  getUserFirstName() {
    return this.session.u.fn
  }

  /**
   * 
   */
  setUserFirstName(firstName) {
    return this.session.u.fn = firstName
  }

  /**
   * 
   */
  getUserLastName() {
    return this.session.u.ln
  }

  /**
   * 
   */
  setUserLastName(lastName) {
    return this.session.u.ln = lastName
  }

  /**
   * 
   */
  getUserEmail() {
    return this.session.u.e
  }

  /**
   * 
   */
  setUserEmail(email) {
    this.session.u.e = email
  }

  /**
   * 
   */
  getSubmission(id) {
    if (this.session.s) {
      for (var i = 0; i < this.session.s.length; i++) {
      const session = this.session.s[i]
        if (session.id === id) {
          return session
        }
      }
    }
  }

  /**
   * 
   */
  addSubmission() {
    const alphabet = '23456789abcdefghjkmnpqrstuvwxyz-';
    const sessionId = nanoid(alphabet, 13);
    const session = {
      id: sessionId,
      function: null,
      functionname: null,
      employees: null
    }
    this.session.s.push(session)
    return sessionId
  }

}

module.exports = Cookie