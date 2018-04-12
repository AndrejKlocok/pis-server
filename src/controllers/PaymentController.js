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

      order.paymentId = payment.id
      await Order.update(order,
        {
          where: {
            id: payment.id
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
      const payment = await Payment.findAll({
        // podmienka
      })
      res.send(payment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
