'use strict'
/**
 * RoomType model
 */
module.exports = (sequelize, DataTypes) => {
  var RoomType = sequelize.define('RoomType', {
    name: DataTypes.STRING
  }, {})
  RoomType.associate = function (models) {
    RoomType.hasMany(models.Room, {
      foreignKey: 'roomTypeId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }
  return RoomType
}
