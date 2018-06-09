// routes to controllers
const EmployeeController = require('./controllers/EmployeeController')
const MenuController = require('./controllers/MenuController')
const CustomerController = require('./controllers/CustomerController')
const TableController = require('./controllers/TableController')
const OrderController = require('./controllers/OrderController')
const OrderStateController = require('./controllers/OrderStateController')
const EmployeePositionController = require('./controllers/EmployeePositionController')
const ItemCategoryController = require('./controllers/ItemCategoryController')
const ItemController = require('./controllers/ItemController')
const PaymentController = require('./controllers/PaymentController')
const ReservationController = require('./controllers/ReservationController')
const RoomController = require('./controllers/RoomController')
const RoomTypeController = require('./controllers/RoomTypeController')
const RequestController = require('./controllers/RequestController')

module.exports = (app) => {
  /* User Interface */
  app.get('/user/menu',
    MenuController.getAllMenus)

  /* Employee requests */
  app.get('/employee/customers',
    CustomerController.getAllCustomers)

  app.post('/employee/login',
    EmployeeController.login)

  app.get('/employee/menu',
    MenuController.getAllMenus)

  app.put('/employee/menu',
    MenuController.updateMenu)

  app.post('/employee/menu',
    MenuController.createMenu)

  app.delete('/employee/menu',
    MenuController.deleteMenu)

  app.get('/employee/menuItem',
    ItemController.getAllItems)

  app.put('/employee/menuItem',
    ItemController.updateItem)

  app.post('/employee/menuItem',
    ItemController.createItem)

  app.delete('/employee/menuItem',
    ItemController.deleteItem)

  app.get('/employee/tableCustomer',
    TableController.getTableByCustomer)

  app.get('/employee/customersOfTable',
    CustomerController.getCustomersByTableId)

  app.post('/employee/order',
    OrderController.createOrder)

  app.get('/employee/orderInTime',
    OrderController.getAllOrdersInTime)

  app.get('/employee/order',
    OrderController.getAllOrders)

  app.put('/employee/order',
    OrderController.updateOrder)

  app.delete('/employee/order',
    OrderController.deleteOrder)

  app.post('/employee/payment',
    PaymentController.createPayment)

  app.delete('/employee/payment',
    PaymentController.deletePayment)

  app.get('/employee/payment',
    PaymentController.getAllPayments)

  app.post('/employee/table',
    TableController.createTable)

  app.get('/employee/table',
    TableController.getAllTables)

  app.put('/employee/table',
    TableController.updateTable)

  app.delete('/employee/table',
    TableController.deleteTable)

  app.post('/employee/roomType',
    RoomTypeController.createRoomType)

  app.put('/employee/roomType',
    RoomTypeController.updateRoomType)

  app.delete('/employee/roomType',
    RoomTypeController.deleteRoomType)

  app.post('/employee/room',
    RoomController.createRoom)

  app.put('/employee/room',
    RoomController.updateRoom)

  app.delete('/employee/room',
    RoomController.deleteRoom)

  app.get('/employee/reservation',
    ReservationController.getReservationsById)

  app.post('/employee/reservation',
    ReservationController.createReservation)

  app.put('/employee/reservation',
    ReservationController.updateReservation)

  app.delete('/employee/reservation',
    ReservationController.deleteReservation)

  app.get('/employee/itemCategory',
    ItemCategoryController.getAllCategories)

  app.post('/employee/itemCategory',
    ItemCategoryController.createCategory)

  app.put('/employee/itemCategory',
    ItemCategoryController.updateCategory)

  app.delete('/employee/itemCategory',
    ItemCategoryController.deleteCategory)

  app.get('/employee/orderState',
    OrderStateController.getAllStates)

  app.post('/employee/orderState',
    OrderStateController.createState)

  app.put('/employee/orderState',
    OrderStateController.updateState)

  app.delete('/employee/orderState',
    OrderStateController.deleteState)

  app.post('/employee/assignRequest',
    RequestController.assignRequest)

  app.get('/employee/request',
    RequestController.getAllRequest)

  /* Customer interface  */
  app.post('/customer/Create',
    CustomerController.createCustomer)

  app.get('/customer/table',
    TableController.getAllTablesInTime)

  app.get('/customer/order',
    OrderController.getCustomerOrders)

  app.get('/customer/orderTime',
    OrderController.getAllOrdersInTime)

  app.get('/customer/ordersNotPaid',
    OrderController.getNotPaidOrders)

  app.post('/customer/order',
    OrderController.createOrder)

  app.get('/customer/orderById',
    OrderController.getOrder)

  app.get('/customer/menu',
    MenuController.getAllMenus)

  app.put('/customer/leave',
    CustomerController.customerLeave)

  app.post('/customer/callEmployee',
    RequestController.createRequest)

  /* Manager interface */
  app.get('/manager/positions',
    EmployeePositionController.getAllPositions)

  app.post('/manager/position',
    EmployeePositionController.createPosition)

  app.put('/manager/position',
    EmployeePositionController.updatePosition)

  app.delete('/manager/position',
    EmployeePositionController.deletePositions)

  app.get('/manager/employee',
    EmployeeController.getAllEmployees)

  app.post('/manager/employee',
    EmployeeController.addNewEmployee)

  app.put('/manager/employee',
    EmployeeController.updateEmployee)

  app.delete('/manager/employee',
    EmployeeController.deleteEmployee)
}
