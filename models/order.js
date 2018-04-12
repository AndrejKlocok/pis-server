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

    Order.belongsTo(models.OrderState, {
      foreignKey: 'orderStateId',
      targetKey: 'id'
    })

    Order.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      targetKey: 'id'
    })

    Order.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      targetKey: 'id'
    })

    Order.belongsTo(models.Payment, {
      foreignKey: 'paymentId',
      targetKey: 'id'
    })
  }
  return Order
}
