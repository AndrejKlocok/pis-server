// routes to controllers
const AuthenticationController = require('./controllers/EmployeeController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const MenuController = require('./controllers/MenuController')
const CustomerController = require('./controllers/CustomerController')
const TableController = require('./controllers/TableController')
const OrderController = require('./controllers/OrderController')

module.exports = (app) => {
/* Post requests */
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/menu',
    MenuController.createMenu)

  app.post('/customerCreate',
    CustomerController.createCustomer)

  /* Get requests */

  app.get('/menu',
    MenuController.getAllMenus)

  app.get('/customerAll',
    CustomerController.getAllCustomers)

  app.get('/tableAll',
    TableController.getAllTables)

  app.get('/orderAll',
    OrderController.getAllOrder)
}
