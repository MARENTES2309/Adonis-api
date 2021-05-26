'use strict'

const User = use('App/Models/User')
class AuthController {
  async login({request, response, auth}){
    const { email, password } = request.only(['email', 'password'])
    const user = await User.findByOrFail('email', email)
    const token = await auth.withRefreshToken().attempt(email,password)

    return response.ok({...token, user})
  }
}

module.exports = AuthController
