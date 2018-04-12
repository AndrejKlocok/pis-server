const {Order} = require('../../models')
const {Item} = require('../../models')
const {Customer} = require('../../models')

module.exports = {
  async createOrder (req, res) {
    try {
      const {itemId, customerId, name, detail, employeeId} = req.body
      const order = await Order.create({
        name: name,
        detail: detail,
        sum: 0,
        paymentId: null,
        customerId: customerId,
        orderStateId: 1,
        employeeId: employeeId
      }, {
        include: [Item]
      })
      order.setItems(itemId)
      res.send(order)
    } catch (err) {
      console.log(err)
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
  },
  async getCustomerOrders (req, res) {
    try {
      const {customerId} = req.body
      const order = await Order.findAll({
        where: {
          customerId: customerId
        }
      })
      res.send(order)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async getOrder (req, res) {
    try {
      const {orderId} = req.body
      const order = await Order.findOne({
        where: {
          id: orderId
        }
      })
      res.send(order)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async customerLeave (req, res) {
    try {
      const {customerId} = req.body
      const orders = await Order.findAll({
        where: {
          customerId: customerId,
          paymentId: null
        }
      })
      // ak zakaznik zaplatil objednavky
      // mozno err
      if (orders.length === 0) {
        Customer.update({
          dateOut: new Date()}, {
          where: {
            id: customerId
          }
        }).error(err => {
          console.log(err)
        })
      }
      res.send(orders)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
