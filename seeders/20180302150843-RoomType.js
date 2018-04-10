'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RoomTypes', [
      {
        id: 1,
        name: 'Miesnost',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'Terasa',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        name: 'Salon',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        name: 'Nefajčiarska',
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
    return queryInterface.bulkDelete('RoomTypes', null, {})
  }
}
