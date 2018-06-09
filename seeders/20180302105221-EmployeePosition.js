'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EmployeePositions', [
      {
        id: 1,
        name: 'Manager',
        detail: 'Boss',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Čašník',
        detail: 'Obsluha zákazníkov',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        name: 'Kuchár',
        detail: 'Pripravuje jedlá',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        name: 'Barman',
        detail: 'Obsluha u baru',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EmployeePositions', null, {})
  }
}
