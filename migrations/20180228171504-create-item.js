'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      detail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      allergens: {
        type: Sequelize.STRING,
        allowNull: true
      },
      grammage: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      volume: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      alcohol: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      itemCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'ItemCategories',
          key: 'id'
        }
      },
      menuId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Menus',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items')
  }
}
