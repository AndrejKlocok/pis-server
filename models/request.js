'use strict'
/**
 * Request model
 */
module.exports = (sequelize, DataTypes) => {
  var Request = sequelize.define('Request', {
    detail: DataTypes.STRING
  }, {})
  Request.associate = function (models) {
    Request.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      targetKey: 'id'
    })
  }
  return Request
}
