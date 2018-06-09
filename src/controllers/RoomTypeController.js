const {RoomType} = require('../../models')
/**
 * Module handles CRUD operations with table RoomTypes.
 */
module.exports = {
  /**
    * Creates an instance of roomType.
    */
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
  /**
    * Updates room type according to given data.
    */
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
  /**
    * Remove room type by given id.
    */
  async deleteRoomType (req, res) {
    try {
      const {id} = req.body
      RoomType.destroy({
        where: {
          id: id
        }
      })
      const roomType = await RoomType.findAll({
      })
      res.send(roomType)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  },
  /**
    * Returns all room types from db.
    */
  async getAllRoomTypes (req, res) {
    try {
      const type = await RoomType.findAll({
      })
      res.send(type)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
