'use strict'
/**
 * OrderState model
 */
module.exports = (sequelize, DataTypes) => {
  var OrderState = sequelize.define('OrderState', {
    name: DataTypes.STRING
  }, {})
  OrderState.associate = function (models) {
    OrderState.hasMany(models.Order, {
      foreignKey: 'orderStateId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return OrderState
}
