const {Employee} = require('../../models')
const jwt = require('jsonwebtoken')
const config = require('./config.js')

function jwSignUser (user) {
  const week = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authenticationJWT.jwtSecret, {
    expiresIn: week
  })
}

module.exports = {
  async register (req, res) {
    try {
      console.log(req.body)
      const employee = await Employee.create(req.body)
      res.send(employee.toJSON)
    } catch (err) {
      res.status(400).send({
        error: 'Wrong fields'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const employee = await Employee.findOne({
        where: {
          email: email
        }
      })
      if (!employee) {
        res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const isPasswordValid = password === employee.password
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const employeeJson = employee.toJSON()
      res.send({
        employee: employeeJson,
        token: jwSignUser(employeeJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured when trying to login'
      })
    }
  }
}
