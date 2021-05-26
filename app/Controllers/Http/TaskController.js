'use strict'
const Task = use('App/Models/Task')
class TaskController {
 
  async index ({ request, response }) {
    const tasks = await Task.all()

    return response.ok(tasks)
  }

  async store ({ request, response }) {

  }

  async show ({ params, request, response }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }

  async storeMany({response}){
    for (let i = 0; i < 10000; i++) {
      await Task.create({ name: `Tarea ${i}` })
    }

    return response.ok({
      msg: 'Tasks were created successfully'
    })
  }
}

module.exports = TaskController
