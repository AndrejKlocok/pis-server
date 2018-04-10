'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [
      {
        id: 1,
        name: 'Bravcovy platok',
        price: 87,
        detail: 'Je to steak',
        allergens: '1,2,3',
        grammage: 150,
        volume: null,
        alcohol: null,
        itemCategoryId: 1,
        menuId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Ryza',
        price: 49,
        detail: 'Je to ryza',
        allergens: '3',
        grammage: 100,
        volume: null,
        alcohol: null,
        itemCategoryId: 2,
        menuId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Cola',
        price: 30,
        detail: 'Je to cola',
        allergens: '',
        grammage: null,
        volume: 3, // deciliter
        alcohol: 0,
        itemCategoryId: 3,
        menuId: 1,
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
    return queryInterface.bulkDelete('Items', null, {})
  }
}
