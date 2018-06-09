const {Reservation} = require('../../models')
const {Employee} = require('../../models')
const {Table} = require('../../models')
const {Sequelize} = require('../../models')
/**
 * Module handles CRUD operations with table Reservations.
 */
module.exports = {
  /**
    * Creates an instance of reservation.
    */
  async createReservation (req, res) {
    try {
      const { name, detail, dateStart, dateEnd, contact, employeeId, tableId } = req.body
      const reservation = await Reservation.create({
        name: name,
        detail: detail,
        dateStart: dateStart,
        dateEnd: dateEnd,
        contact: contact,
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
  /**
    * Update reservation with given data.
    */
  async updateReservation (req, res) {
    try {
      const { id, name, detail, dateStart, dateEnd, contact, employeeId, tableId } = req.body

      await Reservation.update({
        name: name,
        detail: detail,
        dateStart: dateStart,
        dateEnd: dateEnd,
        contact: contact,
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
  /**
    * Delete reservation by given id.
    */
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
  /**
    * Returns reservation istances according to given parameters: tableId, time period (dateStar, dateEnd).
    */
  async getReservationsById (req, res) {
    try {
      var tableId = req.param('tableId')
      var dateStart = req.param('dateStart')
      var dateEnd = req.param('dateEnd')

      var whereStatement
      const Op = Sequelize.Op

      if (tableId && dateStart && dateEnd) {
        /* all reservations in given time period and tableId */
        whereStatement = Sequelize.and(
          Sequelize.or(
            {
              dateStart: {
                [Op.between]: [ dateStart, dateEnd ]
              }
            },
            {
              dateEnd: {
                [Op.between]: [ dateStart, dateEnd ]
              }
            }
          ),
          {
            tableId: tableId
          }
        )
      } else if (tableId) {
        /* all reservations by given tableId */
        whereStatement = {
          tableId: tableId
        }
      } else if (dateStart && dateEnd) {
        /* all reservations by given time period */
        whereStatement = Sequelize.or(
          {
            dateStart: {
              [Op.between]: [ dateStart, dateEnd ]
            }
          },
          {
            dateEnd: {
              [Op.between]: [ dateStart, dateEnd ]
            }
          }
        )
      }
      /* Return */
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
        error: 'An error has occured during searching for reservations, possible wrong arguments'
      })
    }
  }
}
