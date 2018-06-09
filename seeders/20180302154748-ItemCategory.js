'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemCategories', [
      {
        id: 1,
        name: 'Steak',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'Priloha',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        name: 'Alkoholicky napoj',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        name: 'Nealkoholicky napoj',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 5,
        name: 'Šalát',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 6,
        name: 'Sója',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Pochutiny',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemCategories', null, {})
  }
}
