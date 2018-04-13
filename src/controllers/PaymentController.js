const {Payment} = require('../../models')
const {Order} = require('../../models')

module.exports = {
  async createPayment (req, res) {
    try {
      const {orderId, employeeId} = req.body
      const order = await Order.findOne({
        where: {
          id: orderId
        }
      })
      const payment = await Payment.create({
        date: new Date(),
        sum: order.sum,
        employeeId: employeeId,
        createdAt: new Date()
      })

      await Order.update({
        sum: order.sum,
        paymentId: payment.id,
        orderStateId: 4,
        employeeId: employeeId
      }, {
        where: {
          id: orderId
        }
      })
      res.send(payment)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllPayments (req, res) {
    try {
      const payment = await Payment.findAll()
      res.send(payment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async deletePayment (req, res) {
    try {
      const {paymentId} = req.body
      Payment.destroy({
        where: {
          id: paymentId
        }
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  }
}
