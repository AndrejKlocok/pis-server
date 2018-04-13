const {EmployeePosition} = require('../../models')

module.exports = {
  async createPosition (req, res) {
    const {name, detail} = req.body
    try {
      const position = await EmployeePosition.create({
        name: name,
        detial: detail,
        createdAt: new Date()
      })
      res.send(position)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  async updatePosition (req, res) {
    try {
      const {id, name, detail} = req.body
      await EmployeePosition.update({
        name: name,
        detial: detail,
        createdAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const item = await EmployeePosition.findOne({
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
  },
  async deletePositions (req, res) {
    const {id} = req.body
    try {
      EmployeePosition.destroy({
        where: {
          id: id
        }
      })
      const item = await EmployeePosition.findAll({
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
