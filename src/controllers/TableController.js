const {Table} = require('../../models')
const {Customer} = require('../../models')
const {Sequelize} = require('../../models')
const {sequelize} = require('../../models')

module.exports = {
  async createTable (req, res) {
    try {
      const table = await Table.create(req.body)
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllTables (req, res) {
    try {
      const table = await Table.findAll({
        // podmienka
        include: Customer
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async getAllTablesInTime (req, res) {
    try {
      const {time} = req.body
      const Op = Sequelize.Op
      const table = await Table.findAll({
        attributes: ['id', 'name', 'seatCount', 'roomId'],
        include: [{
          model: Customer,
          attributes: [[sequelize.fn('count', sequelize.col('Customers.id')), 'customersCount']],
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
                  [Op.lt]: time
                }
              }
            )
          ),
          required: false
        }],
        group: ['Table.id'],
        required: false
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
