'use strict'
module.exports = (sequelize, DataTypes) => {
  var Request = sequelize.define('Request', {
    detail: DataTypes.STRING
  }, {})
  Request.associate = function (models) {
    // associations can be defined here
    Request.belongsTo(models.Customer, {
      foreignKey: 'customerId',
      targetKey: 'id'
    })
  }
  return Request
}
