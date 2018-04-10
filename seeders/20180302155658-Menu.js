'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [
      {
        id: 1,
        name: 'Steaky',
        detail: 'Obsahuje maso',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Prilohy',
        detail: 'Zemiaky, ryza',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Nealkoholicke napoje',
        detail: 'Obsahuje maso',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Tvrdy Alkohol',
        detail: 'Obsahuje alkohol',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Vegetarianske speciality',
        detail: 'Vegans',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Víno',
        detail: 'Lahky alkohol',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Pivo',
        detail: 'Lahky alkohol',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Pochutiny',
        detail: 'Suché keksy, tyčinky',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {})
  }
}
