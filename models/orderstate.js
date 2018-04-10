'use strict'
module.exports = (sequelize, DataTypes) => {
  var OrderState = sequelize.define('OrderState', {
    name: DataTypes.STRING
  }, {})
  OrderState.associate = function (models) {
    // associations can be defined here
    OrderState.hasMany(models.Order, {
      foreignKey: 'orderStateId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return OrderState
}
