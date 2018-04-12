const {RoomType} = require('../../models')

module.exports = {
  async createRoomType (req, res) {
    try {
      const type = await RoomType.create(req.body)
      res.send(type)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async updateRoomType (req, res) {
    try {
      const {id, name} = req.body

      await RoomType.update({
        name: name,
        updatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const roomType = await RoomType.findOne({
        where: {
          id: id
        }
      })
      res.send(roomType)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  async deleteRoomType (req, res) {
    try {
      const {id} = req.body
      RoomType.destroy({
        where: {
          id: id
        }
      })
      const roomType = await RoomType.findAll({
        // podmienka
      })
      res.send(roomType)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  },
  async getAllRoomTypes (req, res) {
    try {
      const type = await RoomType.findAll({
        // podmienka
      })
      res.send(type)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
