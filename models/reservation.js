'use strict'
module.exports = (sequelize, DataTypes) => {
  var Reservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    dateStart: DataTypes.DATE,
    dateEnd: DataTypes.DATE,
    contact: DataTypes.STRING
  }, {})
  Reservation.associate = function (models) {
    // associations can be defined here
    Reservation.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      targetKey: 'id'
    })

    Reservation.belongsTo(models.Table, {
      foreignKey: 'tableId',
      targetKey: 'id'
    })
  }
  return Reservation
}
