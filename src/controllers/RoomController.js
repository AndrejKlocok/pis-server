const {Room} = require('../../models')
const {RoomType} = require('../../models')

module.exports = {
  async createRoom (req, res) {
    try {
      const {name, capacity, detail, roomTypeId} = req.body
      const room = await Room.create({
        name: name,
        capacity: capacity,
        detail: detail,
        roomTypeId: roomTypeId,
        updatedAt: new Date(),
        createdAt: new Date()
      })
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async updateRoom (req, res) {
    try {
      const {id, name, capacity, detail, roomTypeId} = req.body

      await Room.update({
        name: name,
        capacity: capacity,
        detail: detail,
        roomTypeId: roomTypeId,
        updatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const room = await Room.findOne({
        include: RoomType,
        where: {
          id: id
        }
      })
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  async deleteRoom (req, res) {
    try {
      const {id} = req.body
      Room.destroy({
        where: {
          id: id
        }
      })
      const room = await Room.findAll({
        // podmienka
        include: RoomType
      })
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  },
  async getAllRoom (req, res) {
    try {
      const room = await Room.findAll({
      })
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
