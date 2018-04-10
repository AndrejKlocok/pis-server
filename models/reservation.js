'use strict'
module.exports = (sequelize, DataTypes) => {
  var Reservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    date: DataTypes.DATE,
    contact: DataTypes.STRING
  }, {})
  Reservation.associate = function (models) {
    // associations can be defined here
  }
  return Reservation
}
