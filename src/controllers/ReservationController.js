const {Reservation} = require('../../models')
const {Employee} = require('../../models')
const {Table} = require('../../models')

module.exports = {
  async createReservation (req, res) {
    try {
      const { name, detail, date, contract, employeeId, tableId } = req.body
      const reservation = await Reservation.create({
        name: name,
        detail: detail,
        date: date,
        contract: contract,
        employeeId: employeeId,
        tableId: tableId
      })
      res.send(reservation)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async updateReservation (req, res) {
    try {
      const { id, name, detail, date, contract, employeeId, tableId } = req.body

      await Reservation.update({
        name: name,
        detail: detail,
        date: date,
        contract: contract,
        employeeId: employeeId,
        tableId: tableId,
        updatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const reservation = await Reservation.findOne({
        include: [{
          model: Employee
        },
        {
          model: Table
        }],
        where: {
          id: id
        }
      })
      res.send(reservation)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  async deleteReservation (req, res) {
    try {
      const {id} = req.body
      Reservation.destroy({
        where: {
          id: id
        }
      })
      const reservation = await Reservation.findAll({
        include: [{
          model: Employee
        },
        {
          model: Table
        }]
      })
      res.send(reservation)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  },
  async getAllReservations (req, res) {
    try {
      const reservation = await Reservation.findAll({
        include: [{
          model: Employee
        },
        {
          model: Table
        }]
      })
      res.send(reservation)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async getReservationsById (req, res) {
    try {
      const { tableId, time } = req.body
      var whereStatement = {}

      if (tableId) {
        whereStatement.tableId = tableId
      }
      if (time) {
        whereStatement.time = time.setHours(0, 0, 0, 0)
      }
      const reservation = await Reservation.findAll({
        include: [{
          model: Employee
        },
        {
          model: Table
        }],
        where: whereStatement
      })
      res.send(reservation)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
