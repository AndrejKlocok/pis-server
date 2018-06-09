const {Table} = require('../../models')
const {Customer} = require('../../models')
const {Room} = require('../../models')
const {Sequelize} = require('../../models')
const {sequelize} = require('../../models')
/**
 * Module handles CRUD operations with table Tables.
 */
module.exports = {
  /**
    * Creates an instance of table.
    */
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
  /**
    * Updates table according to given data.
    */
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
  /**
    * Removes table by given id.
    */
  async deleteTable (req, res) {
    try {
      const {tableId} = req.body
      await Table.destroy({
        where: {
          id: tableId
        }
      })
      const table = await Table.findAll({
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  },
  /**
    * Return all tables from db.
    */
  async getAllTables (req, res) {
    try {
      const table = await Table.findAll({
        include: Customer
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Returns all tables from db with count of free seats in time period.
    */
  async getAllTablesInTime (req, res) {
    try {
      var time = req.param('time')
      const Op = Sequelize.Op
      /* Select all tables and count customers in time period */
      const table = await Table.findAll({
        attributes: ['id', 'name', 'seatCount', 'roomId', [sequelize.fn('count', sequelize.col('Customers.id')), 'customersCount']],
        include: [{
          model: Customer,
          attributes: [],
          where: Sequelize.and(
            {
              dateIn: {
                [Op.lte]: time
              }
            },
            Sequelize.or(
              {
                dateOut: null
              },
              {
                dateOut: {
                  [Op.gte]: time
                }
              }
            )
          ),
          required: false
        },
        {
          model: Room,
          attributes: ['name']
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
  /**
    * Returns table where the customer sits by given customerId.
    */
  async getTableByCustomer (req, res) {
    try {
      const customerId = req.param('customerId')
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
