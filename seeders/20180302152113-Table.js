'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Tables', [
      {
        id: 1,
        name: 'Stol',
        seatCount: 6,
        occupied: false,
        roomId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'Stol',
        seatCount: 6,
        occupied: false,
        roomId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        name: 'Stol',
        seatCount: 6,
        occupied: false,
        roomId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        name: 'Stol',
        seatCount: 6,
        occupied: false,
        roomId: 1,
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
    return queryInterface.bulkDelete('Tables', null, {})
  }
}
