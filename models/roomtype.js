'use strict'
module.exports = (sequelize, DataTypes) => {
  var RoomType = sequelize.define('RoomType', {
    name: DataTypes.STRING
  }, {})
  RoomType.associate = function (models) {
    // associations can be defined here
    RoomType.hasMany(models.Room, {
      foreignKey: 'roomTypeId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }
  return RoomType
}
