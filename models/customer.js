'use strict'
/**
 * Customer model
 */
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    dateIn: DataTypes.DATE,
    dateOut: DataTypes.DATE
  }, {})
  Customer.associate = function (models) {
    Customer.hasMany(models.Order, {
      foreignKey: 'customerId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    Customer.hasMany(models.Request, {
      foreignKey: 'customerId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    Customer.belongsTo(models.Table, {
      foreignKey: 'tableId',
      targetKey: 'id'
    })
  }
  return Customer
}
