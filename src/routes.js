// routes to controllers
const AuthenticationController = require('./controllers/EmployeeController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const MenuController = require('./controllers/MenuController')
const CustomerController = require('./controllers/CustomerController')
const TableController = require('./controllers/TableController')
const OrderController = require('./controllers/OrderController')
const EmployeePositionController = require('./controllers/EmployeePositionController')
const ItemCategoryController = require('./controllers/ItemCategoryController')
const ItemController = require('./controllers/ItemController')
const PaymentController = require('./controllers/PaymentController')
const ReservationController = require('./controllers/ReservationController')
const RoomController = require('./controllers/RoomController')
const RoomTypeController = require('./controllers/RoomTypeController')

module.exports = (app) => {
/* Post requests */
  app.post('employee/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('employee/login',
    AuthenticationController.login)

  app.post('/menu/create',
    MenuController.createMenu)

  app.post('/customer/Create',
    CustomerController.createCustomer)

  app.post('/customer/tableView',
    TableController.getAllTablesInTime)

  app.post('/customer/orderList',
    OrderController.getCustomerOrders)

  app.post('/customer/orderAdd',
    OrderController.createOrder)

  app.post('/customer/orderInfo',
    OrderController.getOrder)

  app.post('/customer/menu',
    MenuController.getAllMenus)
  /* Get requests */

  app.get('/menu',
    MenuController.getAllMenus)

  app.get('/customer',
    CustomerController.getAllCustomers)

  app.get('/table',
    TableController.getAllTables)

  app.get('/order',
    OrderController.getAllOrder)

  app.get('/position',
    EmployeePositionController.getAllPositions)

  app.get('/itemCategory',
    ItemCategoryController.getAllCategories)

  app.get('/payment',
    PaymentController.getAllPayments)

  app.get('/item',
    ItemController.getAllItems)

  app.get('/reservation',
    ReservationController.getAllReservations)

  app.get('/room',
    RoomController.getAllRoom)

  app.get('/roomType',
    RoomTypeController.getAllRoomTypes)
}
