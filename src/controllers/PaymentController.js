const {Payment} = require('../../models')

module.exports = {
  async createPayment (req, res) {
    try {
      const payment = await Payment.create(req.body)
      res.send(payment)
    } catch (err) {
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
