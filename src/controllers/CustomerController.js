const {Customer} = require('../../models')
const {Table} = require('../../models')
const {Order} = require('../../models')
const {Item} = require('../../models')
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
  },
  async customerLeave (req, res) {
    const {customerId} = req.body
    try {
      Customer.update({
        dateOut: new Date()}, {
        where: {
          id: customerId
        }
      })
      res.send('success')
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async getCustomersByTableId (req, res) {
    try {
      const {tableId} = req.body
      const customers = await Customer.findAll({
        include: [{
          model: Order,
          include: [{
            model: Item}, {
            model: Customer
          }]
        }],
        where: {
          tableId: tableId
        }
      })
      res.send(customers)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
