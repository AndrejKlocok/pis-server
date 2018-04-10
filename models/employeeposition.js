'use strict'
module.exports = (sequelize, DataTypes) => {
  var EmployeePosition = sequelize.define('EmployeePosition', {
    name: DataTypes.STRING,
    detail: DataTypes.STRING
  }, {})
  EmployeePosition.associate = function (models) {
    // EmployeePosition 1 ----> employee N target model
    EmployeePosition.hasMany(models.Employee, {
      foreignKey: 'employeePositionId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  }
  return EmployeePosition
}
