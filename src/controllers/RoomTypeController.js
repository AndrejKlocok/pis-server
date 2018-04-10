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
