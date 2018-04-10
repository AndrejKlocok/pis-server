const {EmployeePosition} = require('../../models')

module.exports = {
  async createPosition (req, res) {
    try {
      const position = await EmployeePosition.create({
        name: 'customer',
        date: new Date()
      })
      res.send(position)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async getAllPositions (req, res) {
    try {
      const position = await EmployeePosition.findAll({
        // podmienka
      })
      res.send(position)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
