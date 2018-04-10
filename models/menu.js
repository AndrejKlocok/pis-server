'use strict'
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    validity: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {})
  Menu.associate = function (models) {
    // associations can be defined here
    Menu.hasMany(models.Item, {
      foreignKey: 'menuId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return Menu
}
