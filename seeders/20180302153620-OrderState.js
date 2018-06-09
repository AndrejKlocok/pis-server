'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderStates', [
      {
        id: 1,
        name: 'Vybavuje sa',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'Pripravené',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        name: 'Odovzdané',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        name: 'Zaplatené',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 5,
        name: 'Zrušené',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderStates', null, {})
  }
}
