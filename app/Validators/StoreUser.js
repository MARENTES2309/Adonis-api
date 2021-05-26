'use strict'
const { formatters } = use('Validator')

class StoreUser {
  get formatter () {
    return formatters.JsonApi
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email|max:254|unique:users,email',
      password: 'required|max:60'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.badRequest(errorMessages)
  }
}

module.exports = StoreUser
