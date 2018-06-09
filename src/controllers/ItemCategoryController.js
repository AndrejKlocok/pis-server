const {ItemCategory} = require('../../models')
/**
 * Module handles CRUD operations with table ItemCategories.
 */
module.exports = {
  /**
    * Creates category instance.
    */
  async createCategory (req, res) {
    try {
      const category = await ItemCategory.create(req.body)
      res.send(category)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  /**
    * Updates category with given data.
    */
  async updateCategory (req, res) {
    try {
      const {id, name} = req.body
      await ItemCategory.update({
        name: name,
        UpdatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const category = await ItemCategory.findOne({
        where: {
          id: id
        }
      })
      res.send(category)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  /**
    * Returns all categories.
    */
  async getAllCategories (req, res) {
    try {
      const category = await ItemCategory.findAll({
      })
      res.send(category)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Deletes category by given idô
    */
  async deleteCategory (req, res) {
    const {id} = req.body
    try {
      ItemCategory.destroy({
        where: {
          id: id
        }
      })
      const category = await ItemCategory.findAll({
      })
      res.send(category)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  }
}
