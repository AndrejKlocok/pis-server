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
  }
}
