// routes to controllers
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const MenuController = require('./controllers/MenuController')
const CustomerController = require('./controllers/CustomerController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/menu',
    MenuController.createMenu)

  app.get('/menu',
    MenuController.getAllMenus)

  app.get('/customerAll',
    CustomerController.getAllCustomers)

  app.post('/customerCreate',
    CustomerController.createCustomer)
}
