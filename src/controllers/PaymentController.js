const {Payment} = require('../../models')
const {Order} = require('../../models')
/**
 * Module handles CRUD operations with table Payments.
 */
module.exports = {
  /**
    * Creates an instance of payment.
    */
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
      /* After creating payment update order with foreign key */
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
  /**
    * Returns all payments from db.
    */
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
  /**
    * Deletes payment by given id.
    */
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
