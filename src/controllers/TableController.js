const {Table} = require('../../models')
const {Customer} = require('../../models')
// const {Sequelize} = require('../../models')

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
      // const {time} = req.body
      // const Op = Sequelize.Op
      const table = await Table.findAll({
        attributes: ['id', 'name', 'searCount', 'roomId'],
        include: Customer
        /* where: {
          [Op.and]: [{
            dateIn: {
              [Op.lt]: time
            }
          },
          {
            [Op.or]: [{
              dateOut: null
            },{
              dateOut:
            }]
          }]
        } */
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
