const {Table} = require('../../models')
const {Customer} = require('../../models')
const {RoomType} = require('../../models')
const {Sequelize} = require('../../models')
const {sequelize} = require('../../models')

module.exports = {
  async createTable (req, res) {
    try {
      const {name, seatCount, roomId} = req.body
      const table = await Table.create({
        name: name,
        seatCount: seatCount,
        roomId: roomId
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async updateTable (req, res) {
    try {
      const {id, name, seatCount, roomId} = req.body

      await Table.update({
        name: name,
        seatCount: seatCount,
        roomId: roomId,
        updatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const table = await Table.findOne({
        include: RoomType,
        where: {
          id: id
        }
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  async deleteTable (req, res) {
    try {
      const {tableId} = req.body
      Table.destroy({
        where: {
          id: tableId
        }
      })
      const table = await Table.findAll({
        include: RoomType
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
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
                  [Op.gt]: time
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
  },
  async getTableByCustomer (req, res) {
    try {
      const { customerId } = req.body
      const table = await Table.findOne({
        include: [{
          model: Customer,
          where: {
            id: customerId
          }
        }]
      })
      res.send(table)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
