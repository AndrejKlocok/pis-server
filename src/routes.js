// routes to controllers
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const MenuController = require('./controllers/MenuController')

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
}
