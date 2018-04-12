const {Menu} = require('../../models')
const {Item} = require('../../models')

module.exports = {
  async createMenu (req, res) {
    try {
      const {name, detail, validity} = req.body
      const menu = await Menu.create({
        name: name,
        detail: detail,
        validity: validity,
        updatedAt: new Date(),
        createdAt: new Date()
      })
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
  },
  async updateMenu (req, res) {
    try {
      const {id, name, detail, validity} = req.body

      await Menu.update({
        name: name,
        detail: detail,
        validity: validity,
        updatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const menu = await Menu.findOne({
        where: {
          id: id
        }
      })
      res.send(menu)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  async deleteMenu (req, res) {
    try {
      const {id} = req.body
      Menu.destroy({
        where: {
          id: id
        }
      })
      const menu = await Menu.findAll({
        // podmienka
      })
      res.send(menu)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  }
}
