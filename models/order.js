'use strict'
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    sum: DataTypes.FLOAT
  }, {})
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsToMany(models.Item, {
      through: 'OrderItem',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }
  return Order
}
