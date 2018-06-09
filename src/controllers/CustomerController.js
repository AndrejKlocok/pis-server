const {Customer} = require('../../models')
const {Table} = require('../../models')
const {Order} = require('../../models')
const {Item} = require('../../models')
const {Sequelize} = require('../../models')
/**
 * Module handles CRUD operations with table Customers.
 */
module.exports = {
  /**
   *  Creates new instance in db
   */
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
  /**
   *  Returns all customers according to given time parameter.
   */
  async getAllCustomers (req, res) {
    try {
      var customer
      var time = req.param('time')

      if (!time) {
        customer = await Customer.findAll({
          include: Table
        })
      } else {
        const Op = Sequelize.Op
        customer = await Customer.findAll({
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
      }
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetchig data'
      })
    }
  },
  /**
   *  Update the date of customer departure.
   */
  async customerLeave (req, res) {
    const {customerId} = req.body
    try {
      await Customer.update({
        dateOut: new Date()}, {
        where: {
          id: customerId
        }
      })
      res.send('success')
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during customer leaving'
      })
    }
  },
  /**
   *  Returns all customers of the given table.
   */
  async getCustomersByTableId (req, res) {
    try {
      const tableId = req.param('tableId')
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
        error: 'An error has occured during fetching data'
      })
    }
  }
}
