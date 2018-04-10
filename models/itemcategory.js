'use strict'
module.exports = (sequelize, DataTypes) => {
  var ItemCategory = sequelize.define('ItemCategory', {
    name: DataTypes.STRING
  }, {})
  ItemCategory.associate = function (models) {
    // associations can be defined here
    ItemCategory.hasMany(models.Item, {
      foreignKey: 'itemCategoryId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return ItemCategory
}
