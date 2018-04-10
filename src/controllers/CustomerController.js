const {Customer} = require('../../models')

module.exports = {
  async createCustomer (req, res) {
    try {
      const {tableId} = req.body
      console.log(req.body)
      const customer = await Customer.create({
        name: 'customer',
        date: new Date(),
        tableId: tableId
      })
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllCustomers (req, res) {
    try {
      const customer = await Customer.findAll({
        // podmienka
      })
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
