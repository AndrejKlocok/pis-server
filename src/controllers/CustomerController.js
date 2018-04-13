const {Customer} = require('../../models')
const {Table} = require('../../models')
const {Sequelize} = require('../../models')

module.exports = {
  async createCustomer (req, res) {
    try {
      const {tableId} = req.body
      const customer = await Customer.create({
        name: 'customer',
        dateIn: new Date(),
        dateOut: null,
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
        include: Table
      })
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async getAllCustomersInTime (req, res) {
    try {
      const {time} = req.body
      const Op = Sequelize.Op
      const customers = await Customer.findAll({
        include: Table,
        where: Sequelize.and(
          {
            dateIn: {
              [Op.lt]: time
            }
          },
          Sequelize.or(
            {
              dateOut: null
            },
            {
              dateOut: {
                [Op.gt]: time
              }
            }
          )
        )
      })
      res.send(customers)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
