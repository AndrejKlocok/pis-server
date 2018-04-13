const {ItemCategory} = require('../../models')

module.exports = {
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
  async getAllCategories (req, res) {
    try {
      const category = await ItemCategory.findAll({
        // podmienka
      })
      res.send(category)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async deleteCategory (req, res) {
    const {id} = req.body
    try {
      ItemCategory.destroy({
        where: {
          id: id
        }
      })
      const category = await ItemCategory.findAll({
        // podmienka
      })
      res.send(category)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
