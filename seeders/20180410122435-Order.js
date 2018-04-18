'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        id: 1,
        name: 'special',
        detail: ' ',
        sum: 0,
        paymentId: 1,
        customerId: 1,
        orderStateId: 1,
        employeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'special',
        detail: ' ',
        sum: 0,
        paymentId: null,
        customerId: 2,
        orderStateId: 1,
        employeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {})
  }
}
