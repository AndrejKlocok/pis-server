'use strict'
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    dateIn: DataTypes.DATE,
    dateOut: DataTypes.DATE
  }, {})
  Customer.associate = function (models) {
    // associations can be defined here
    Customer.hasMany(models.Order, {
      foreignKey: 'customerId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })

    Customer.belongsTo(models.Table, {
      foreignKey: 'tableId',
      targetKey: 'id'
    })
  }
  return Customer
}
