const {Item} = require('../../models')

module.exports = {
  async createItem (req, res) {
    try {
      const item = await Item.create({
        name: 'customer',
        date: new Date()
      })
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllItems (req, res) {
    try {
      const item = await Item.findAll({
        // podmienka
      })
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
