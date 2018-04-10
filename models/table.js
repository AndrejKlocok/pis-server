'use strict'
module.exports = (sequelize, DataTypes) => {
  var Table = sequelize.define('Table', {
    name: DataTypes.STRING,
    seatCount: DataTypes.INTEGER,
    occupied: DataTypes.BOOLEAN
  }, {})
  Table.associate = function (models) {
    // associations can be defined here
    Table.hasMany(models.Customer, {
      foreignKey: 'tableId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
    Table.hasMany(models.Reservation, {
      foreignKey: 'tableId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return Table
}
