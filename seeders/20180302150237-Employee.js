'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Employees', [
      {
        id: 1,
        name: 'Andrej',
        surname: 'Klocok',
        password: 'heslo',
        email: 'email0@email.com',
        employeePositionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'Milan',
        surname: 'Mucka',
        password: 'heslo',
        email: 'email2@email.com',
        employeePositionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        name: 'Jozef',
        surname: 'Novak',
        password: 'heslo',
        email: 'email3@email.com',
        employeePositionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        name: 'Martin',
        surname: 'Timko',
        password: 'heslo',
        email: 'email1@email.com',
        employeePositionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Employees', null, {})
  }
}
