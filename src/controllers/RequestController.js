const {Request} = require('../../models')

module.exports = {
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
  async assignRequest (req, res) {
    try {
      const {id} = req.body
      Request.destroy({
        where: {
          id: id
        }
      })
      const request = await Request.findAll({
        // podmienka
      })
      res.send(request)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  },
  async getAllRequest (req, res) {
    try {
      const request = await Request.findAll({
        // podmienka
      })
      res.send(request)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
