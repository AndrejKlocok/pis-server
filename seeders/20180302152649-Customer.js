'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
      {
        id: 1,
        name: 'Jano',
        dateIn: new Date(),
        dateOut: null,
        tableId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Jana',
        dateIn: new Date(),
        dateOut: null,
        tableId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {})
  }
}
