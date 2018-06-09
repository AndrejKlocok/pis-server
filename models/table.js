'use strict'
/**
 * Table model
 */
module.exports = (sequelize, DataTypes) => {
  var Table = sequelize.define('Table', {
    name: DataTypes.STRING,
    seatCount: DataTypes.INTEGER
  }, {})
  Table.associate = function (models) {
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
    Table.belongsTo(models.Room, {
      foreignKey: 'roomId',
      targetKey: 'id'
    })
  }
  return Table
}
