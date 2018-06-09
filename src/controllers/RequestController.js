const {Request} = require('../../models')
const {Customer} = require('../../models')
const {Table} = require('../../models')
/**
 * Module handles CRUD operations with table Requests.
 */
module.exports = {
  /**
    * Creates an instance of request.
    */
  async createRequest (req, res) {
    try {
      const {customerId, detail} = req.body
      const request = await Request.create({
        customerId: customerId,
        detail: detail
      })
      res.send(request)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  /**
    * Employee assigns request with given id by removing it.
    */
  async assignRequest (req, res) {
    try {
      const {id} = req.body
      Request.destroy({
        where: {
          id: id
        }
      })
      const request = await Request.findAll({
        include: [{
          model: Customer,
          include: Table
        }]})
      res.send(request)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  },
  /**
    * Returns all requests from db.
    */
  async getAllRequest (req, res) {
    try {
      const request = await Request.findAll({
        include: [{
          model: Customer,
          include: Table
        }]})

      res.send(request)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
