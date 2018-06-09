'use strict'
/**
 * Item model
 */
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    detail: DataTypes.STRING,
    allergens: DataTypes.STRING,
    grammage: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    alcohol: DataTypes.FLOAT
  }, {})
  Item.associate = function (models) {
    Item.belongsToMany(models.Order, {
      through: 'OrderItem',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    Item.belongsTo(models.Menu, {
      foreignKey: 'menuId',
      targetKey: 'id'
    })

    Item.belongsTo(models.ItemCategory, {
      foreignKey: 'itemCategoryId',
      targetKey: 'id'
    })
  }
  return Item
}
