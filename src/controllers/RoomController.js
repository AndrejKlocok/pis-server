const {Room} = require('../../models')

module.exports = {
  async createRoom (req, res) {
    try {
      const room = await Room.create(req.body)
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
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
