const {OrderState} = require('../../models')

module.exports = {
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
  async getAllStates (req, res) {
    try {
      const state = await OrderState.findAll({
        // podmienka
      })
      res.send(state)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
