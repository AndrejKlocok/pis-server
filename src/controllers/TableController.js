const {Table} = require('../../models')

module.exports = {
  async createTable (req, res) {
    try {
      const table = await Table.create(req.body)
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllTables (req, res) {
    try {
      const table = await Table.findAll({
        // podmienka
      })
      res.send(table)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
