'use strict'
const { formatters } = use('Validator')
class LoginUser {
  get formatter () {
    return formatters.JsonApi
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.badRequest(errorMessages)
  }
}

module.exports = LoginUser
