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
/* ----------------   Employee requests   ----------------------- */
  app.post('/employee/listAllCustomers',
    CustomerController.getAllCustomers)

  app.post('/employee/listCustomers',
    CustomerController.getAllCustomersInTime)

  app.post('/employee/register',
    EmployeeControllerPolicy.register,
    EmployeeController.register)

  app.post('/employee/login',
    EmployeeController.login)

  /* Menu endpoints */
  app.post('/employee/menuGet',
    MenuController.getAllMenus)

  app.post('/employee/menuItemsGet',
    MenuController.getItemsMenus)

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

  app.post('/employee/ordersCurrent',
    OrderController.getAllOrdersInTime)

  /* Table endpoints */
  app.post('/employee/tableCustomer',
    TableController.getTableByCustomer)

  app.post('/employee/tableCreate',
    TableController.createTable)

  app.post('/employee/tableChange',
    TableController.updateTable)

  app.post('/employee/tableDelete',
    TableController.deleteTable)

  app.post('/employee/roomTypeCreate',
    RoomTypeController.createRoomType)

  app.post('/employee/roomTypeChange',
    RoomTypeController.updateRoomType)

  app.post('/employee/roomTypeDelete',
    RoomTypeController.deleteRoomType)

  app.post('/employee/roomCreate',
    RoomController.createRoom)

  app.post('/employee/roomChange',
    RoomController.updateRoom)

  app.post('/employee/roomDelete',
    RoomController.deleteRoom)

  app.post('/employee/paymentCreate',
    PaymentController.createPayment)

  app.post('/employee/paymentDelete',
    PaymentController.deletePayment)

  app.post('/employee/paymentGetAll',
    PaymentController.getAllPayments)

  app.post('/employee/reservationList',
    ReservationController.getAllReservations)

  app.post('/employee/reservationListGet',
    ReservationController.updateReservation)

  app.post('/employee/reservationCreate',
    ReservationController.createReservation)

  app.post('/employee/reservationChange',
    ReservationController.updateReservation)

  app.post('/employee/reservationDelete',
    ReservationController.deleteReservation)

  /* ----------------------- Customer interface ----------------------- */
  app.post('/customer/tableView',
    TableController.getAllTablesInTime)

  app.post('/customer/Create',
    CustomerController.createCustomer)

  app.post('/customer/leave',
    OrderController.customerLeave)

  app.post('/customer/orderList',
    OrderController.getCustomerOrders)

  app.post('/customer/ordersCurrent',
    OrderController.getAllOrdersInTime)

  app.post('/customer/orderAdd',
    OrderController.createOrder)

  app.post('/customer/orderInfo',
    OrderController.getOrder)

  app.post('/customer/menu',
    MenuController.getAllMenus)

  /* ----------------------- Manager interface ----------------------- */
  app.post('/manager/employeeGet',
    EmployeeController.getAllEmployees)

  app.post('/manager/employeeAdd',
    EmployeeController.addNewEmployee)

  app.post('/manager/employeeChange',
    EmployeeController.updateEmployee)

  app.post('/manager/employeeDelete',
    EmployeeController.deleteEmployee)

  /* Get requests */

  app.get('/menu',
    MenuController.getAllMenus)

  app.get('/customer',
    CustomerController.getAllCustomers)

  app.get('/table',
    TableController.getAllTables)

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
