const {EmployeePosition} = require('../../models')
/**
 * Module handles CRUD operations with table EmployeePositions.
 */
module.exports = {
  /**
    * Create position.
    */
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
  /**
    * Update position.
    */
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
  /**
    * Return all positions.
    */
  async getAllPositions (req, res) {
    try {
      const position = await EmployeePosition.findAll({
      })
      res.send(position)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
   * Delete given position by id.
   */
  async deletePositions (req, res) {
    const {id} = req.body
    try {
      EmployeePosition.destroy({
        where: {
          id: id
        }
      })
      const item = await EmployeePosition.findAll({
      })
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  }
}
