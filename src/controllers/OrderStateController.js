const {OrderState} = require('../../models')
/**
 * Module handles CRUD operations with table OrderStates.
 */
module.exports = {
  /**
    * Creates an instance of state.
    */
  async createState (req, res) {
    try {
      const state = await OrderState.create(req.body)
      res.send(state)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  /**
    * Update state according to given data.
    */
  async updateState (req, res) {
    try {
      const {id, name} = req.body
      await OrderState.update({
        name: name,
        UpdatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const state = await OrderState.findOne({
        where: {
          id: id
        }
      })
      res.send(state)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  /**
    * Return all states from db.
    */
  async getAllStates (req, res) {
    try {
      const state = await OrderState.findAll({
      })
      res.send(state)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Deletes state by given id.
    */
  async deleteState (req, res) {
    const {id} = req.body
    try {
      OrderState.destroy({
        where: {
          id: id
        }
      })
      const state = await OrderState.findAll({
      })
      res.send(state)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
