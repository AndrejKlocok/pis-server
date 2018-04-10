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
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('ItemCategories', null, {})
  }
}
