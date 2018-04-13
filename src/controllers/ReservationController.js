const {Reservation} = require('../../models')
const {Employee} = require('../../models')
const {Table} = require('../../models')
const {Sequelize} = require('../../models')

module.exports = {
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
  async updateReservation (req, res) {
    try {
      const { id, name, detail, dateStart, dateEnd, contract, employeeId, tableId } = req.body

      await Reservation.update({
        name: name,
        detail: detail,
        dateStart: dateStart,
        dateEnd: dateEnd,
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
  async getReservationsById (req, res) {
    try {
      const { tableId, dateStart, dateEnd } = req.body
      var whereStatement
      const Op = Sequelize.Op

      if (tableId && dateStart && dateEnd) {
        // vsetky rezervacie v dany cas nad stolom tableId
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
        // vsetky rezervacie s tableId
        whereStatement = {
          tableId: tableId
        }
      } else if (dateStart && dateEnd) {
        // vsetky rezervacie v dany cas
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
