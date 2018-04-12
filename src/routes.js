// routes to controllers
const EmployeeController = require('./controllers/EmployeeController')
const EmployeeControllerPolicy = require('./policies/AuthenticationControllerPolicy')
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
  app.post('/employee/register',
    EmployeeControllerPolicy.register,
    EmployeeController.register)

  app.post('/employee/login',
    EmployeeController.login)

  app.post('/employee/menuGet',
    MenuController.getAllMenus)

  app.post('/employee/menuChange',
    MenuController.updateMenu)

  app.post('/employee/menuAdd',
    MenuController.createMenu)

  app.post('/employee/menuDelete',
    MenuController.deleteMenu)

  app.post('/employee/menuItemChange',
    ItemController.updateItem)

  app.post('/employee/menuItemAdd',
    ItemController.createItem)

  app.post('/employee/menuItemDelete',
    ItemController.deleteItem)

  app.post('/menu/create',
    MenuController.createMenu)

  /* Customer interface  */
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

  app.post('/customer/leave',
    OrderController.customerLeave)
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
