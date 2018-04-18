'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rooms', [
      {
        id: 1,
        name: 'Bar',
        capacity: 100,
        detail: 'Bar',
        roomTypeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'Jedáleň',
        capacity: 100,
        detail: 'Jedáleň',
        roomTypeId: 4,
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
