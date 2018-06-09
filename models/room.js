'use strict'
/**
 * Room model
 */
module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    detail: DataTypes.STRING
  }, {})
  Room.associate = function (models) {
    Room.hasMany(models.Table, {
      foreignKey: 'roomId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })

    Room.belongsTo(models.RoomType, {
      foreignKey: 'roomTypeId',
      targetKey: 'id'
    })
  }
  return Room
}
