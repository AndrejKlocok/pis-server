const {Menu} = require('../../models')
const {Item} = require('../../models')

module.exports = {
  async createMenu (req, res) {
    try {
      const menu = await Menu.create(req.body)
      res.send(menu)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllMenus (req, res) {
    try {
      const menu = await Menu.findAll({
        // podmienka
        include: Item
      })
      res.send(menu)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
