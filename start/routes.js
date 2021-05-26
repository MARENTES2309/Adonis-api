'use strict'

const Route = use('Route')

Route.post('login', 'AuthController.login')
.validator('LoginUser')

Route.post('storeTasks', 'TaskController.storeMany')
Route.resource('tasks', 'TaskController')
  .apiOnly()

Route.resource('users', 'UserController')
  .apiOnly()
  .validator(new Map([
    [['users.store'], ['StoreUser']]
  ]))
