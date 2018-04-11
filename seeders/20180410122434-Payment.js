'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payments', [
      {
        id: 1,
        date: new Date(),
        sum: 0,
        detail: ' ',
        employeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Payments', null, {})
  }
}
