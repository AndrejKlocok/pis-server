'use strict'
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {})
  Employee.associate = function (models) {
    Employee.hasMany(models.Payment, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    Employee.hasMany(models.Payment, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    Employee.hasMany(models.Reservation, {
      foreignKey: 'employeeId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  }
  return Employee
}
