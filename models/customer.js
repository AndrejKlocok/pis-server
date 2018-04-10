'use strict'
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    date: DataTypes.DATE
  }, {})
  Customer.associate = function (models) {
    // associations can be defined here
    Customer.hasMany(models.Order, {
      foreignKey: 'customerId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return Customer
}
