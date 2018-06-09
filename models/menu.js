'use strict'
/**
 * Menu model
 */
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    validity: DataTypes.BOOLEAN
  }, {})
  Menu.associate = function (models) {
    Menu.hasMany(models.Item, {
      foreignKey: 'menuId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return Menu
}
