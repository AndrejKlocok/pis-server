'use strict'
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
    // associations can be defined here
    Item.belongsToMany(models.Order, {
      through: 'OrderItem',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }
  return Item
}
