const {Menu} = require('../../models')
const {Item} = require('../../models')
/**
 * Module handles CRUD operations with table Menus.
 */
module.exports = {
  /**
    * Creates an instance of menu.
    */
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
  /**
    * Returns all menus with its items from db.
    */
  async getAllMenus (req, res) {
    try {
      const menu = await Menu.findAll({
        include: Item
      })
      res.send(menu)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Returns all items of menu.
    */
  async getItemsMenus (req, res) {
    try {
      const {menuId} = req.body
      const items = await Item.findAll({
        where: {
          id: menuId
        }
      })
      res.send(items)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Updates menu with given data.
    */
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
  /**
    * Deletes menu by given id.
    */
  async deleteMenu (req, res) {
    try {
      const {id} = req.body
      Menu.destroy({
        where: {
          id: id
        }
      })
      const menu = await Menu.findAll({
      })
      res.send(menu)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  }
}
