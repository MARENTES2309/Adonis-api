'use strict'

const User = use('App/Models/User')
class UserController {
  async store({request, response}){
    const userdData = request.only(['email', 'password']);
    const user = await User.create(userdData);

    return response.created({
      status: true,
      data: user
    });
  }
}

module.exports = UserController
