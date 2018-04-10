'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderItem', [
      {
        orderId: 1,
        itemId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 1,
        itemId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 1,
        itemId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 2,
        itemId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 2,
        itemId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 2,
        itemId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderItem', null, {})
  }
}
