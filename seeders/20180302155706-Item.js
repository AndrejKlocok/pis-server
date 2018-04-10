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
        name: 'Kuraci platok',
        price: 69,
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
        id: 3,
        name: 'Hovadzi platok',
        price: 95,
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
        id: 4,
        name: 'Ryza',
        price: 49,
        detail: 'Je to ryza',
        allergens: '3',
        grammage: 100,
        volume: null,
        alcohol: null,
        itemCategoryId: 2,
        menuId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Zemiaky',
        price: 49,
        detail: 'Krajane zemiaky',
        allergens: '3',
        grammage: 100,
        volume: null,
        alcohol: null,
        itemCategoryId: 2,
        menuId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Hranolky',
        price: 49,
        detail: 'Smazene hranolky',
        allergens: '3',
        grammage: 100,
        volume: null,
        alcohol: null,
        itemCategoryId: 2,
        menuId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Cola',
        price: 30,
        detail: 'Je to cola',
        allergens: '',
        grammage: null,
        volume: 3, // deciliter
        alcohol: 0,
        itemCategoryId: 4,
        menuId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Radler',
        price: 30,
        detail: 'pivo',
        allergens: '',
        grammage: null,
        volume: 3, // deciliter
        alcohol: 0,
        itemCategoryId: 4,
        menuId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Mineralka',
        price: 30,
        detail: 'Je to cola',
        allergens: '',
        grammage: null,
        volume: 3, // deciliter
        alcohol: 0,
        itemCategoryId: 4,
        menuId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Jack',
        price: 30,
        detail: ' ',
        allergens: '',
        grammage: null,
        volume: 3, // deciliter
        alcohol: 0,
        itemCategoryId: 4,
        menuId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {})
  }
}
