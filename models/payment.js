'use strict'
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define('Payment', {
    date: DataTypes.DATE,
    sum: DataTypes.FLOAT,
    detail: DataTypes.STRING
  }, {})
  Payment.associate = function (models) {
    // associations can be defined here
    Payment.hasOne(models.Order, {
      foreignKey: 'paymentId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return Payment
}
