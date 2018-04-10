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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('OrderStates', null, {})
  }
}
