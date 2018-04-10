const {Reservation} = require('../../models')

module.exports = {
  async createPayment (req, res) {
    try {
      const reservation = await Reservation.create(req.body)
      res.send(reservation)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllPayments (req, res) {
    try {
      const reservation = await Reservation.findAll({
        // podmienka
      })
      res.send(reservation)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
