const {Employee} = require('../../models')
const jwt = require('jsonwebtoken')
const config = require('./config.js')

function jwSignUser (user) {
  const week = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authenticationJWT.jwtSecret, {
    expiresIn: week
  })
}
/**
 * Module handles CRUD operations with table Employees.
 */
module.exports = {
  /**
   *  Employee login to IS.
   */
  async login (req, res) {
    try {
      const {email, password} = req.body
      const employee = await Employee.findOne({
        where: {
          email: email
        }
      })
      /* Employee does not exists */
      if (!employee) {
        res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      /* Wrong password */
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
  },
  /**
   * Returns all employees.
   */
  async getAllEmployees (req, res) {
    try {
      const employees = await Employee.findAll({
        // podmienka
      })
      res.send(employees)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
   * Create new employee.
   */
  async addNewEmployee (req, res) {
    try {
      const {name, surname, password, email, employeePositionId} = req.body
      const emp = await Employee.create({
        name: name,
        surname: surname,
        password: password,
        email: email,
        employeePositionId: employeePositionId,
        updatedAt: new Date(),
        createdAt: new Date()
      })
      res.send(emp)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  /**
   *  Update employee by given data.
   */
  async updateEmployee (req, res) {
    try {
      const {id, name, surname, password, email, employeePositionId} = req.body

      await Employee.update({
        name: name,
        surname: surname,
        password: password,
        email: email,
        employeePositionId: employeePositionId,
        updatedAt: new Date()
      },
      {
        where: {
          id: id
        }
      })
      const emp = await Employee.findOne({
        where: {
          id: id
        }
      })
      res.send(emp)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  /**
   * Delete employee by given id.
   */
  async deleteEmployee (req, res) {
    try {
      const {id} = req.body
      Employee.destroy({
        where: {
          id: id
        }
      })
      const emp = await Employee.findAll({
        // podmienka
      })
      res.send(emp)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  }
}
