const {Order} = require('../../models')
const {Item} = require('../../models')

module.exports = {
  async createOrder (req, res) {
    try {
      const order = await Order.create(req.body)
      res.send(order)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllOrder (req, res) {
    try {
      const order = await Order.findAll({
        include: Item
      })
      res.send(order)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}