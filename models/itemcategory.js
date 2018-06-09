'use strict'
/**
 * ItemCategory model
 */
module.exports = (sequelize, DataTypes) => {
  var ItemCategory = sequelize.define('ItemCategory', {
    name: DataTypes.STRING
  }, {})
  ItemCategory.associate = function (models) {
    ItemCategory.hasMany(models.Item, {
      foreignKey: 'itemCategoryId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return ItemCategory
}
