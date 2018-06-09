const {Item} = require('../../models')
/**
 * Module handles CRUD operations with table Items.
 */
module.exports = {
  /**
    * Creates item instance.
    */
  async createItem (req, res) {
    try {
      const {name, price, detail, allergens, grammage, volume, alcohol,
        itemCategoryId, menuId} = req.body
      const item = await Item.create({
        name: name,
        price: price,
        detail: detail,
        allergens: allergens,
        grammage: grammage,
        volume: volume,
        alcohol: alcohol,
        itemCategoryId: itemCategoryId,
        menuId: menuId,
        updatedAt: new Date(),
        createdAt: new Date()
      })
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  /**
    * Returns all items from db.
    */
  async getAllItems (req, res) {
    try {
      const item = await Item.findAll({
      })
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Updates item with given data.
    */
  async updateItem (req, res) {
    try {
      const {id, name, price, detail, allergens, grammage, volume, alcohol,
        itemCategoryId, menuId} = req.body

      await Item.update({
        name: name,
        price: price,
        detail: detail,
        allergens: allergens,
        grammage: grammage,
        volume: volume,
        alcohol: alcohol,
        itemCategoryId: itemCategoryId,
        menuId: menuId,
        updatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const item = await Item.findOne({
        where: {
          id: id
        }
      })
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  /**
    * Deletes item by given id.
    */
  async deleteItem (req, res) {
    try {
      const {id} = req.body
      Item.destroy({
        where: {
          id: id
        }
      })
      const item = await Item.findAll({
      })
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  }
}
