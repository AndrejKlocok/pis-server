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
  app.post('/user/menu',
    MenuController.getAllMenus)

  /* Employee requests */
  app.post('/employee/listAllCustomers',
    CustomerController.getAllCustomers)

  app.post('/employee/listCustomers',
    CustomerController.getAllCustomersInTime)

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

  app.post('/employee/tableCustomer',
    TableController.getTableByCustomer)

  app.post('/employee/customersOfTable',
    CustomerController.getCustomersByTableId)

  app.post('/employee/ordersCreate',
    OrderController.createOrder)

  app.post('/employee/ordersCurrent',
    OrderController.getAllOrdersInTime)

  app.post('/employee/ordersAll',
    OrderController.getAllOrders)

  app.post('/employee/orderChange',
    OrderController.updateOrder)

  app.post('/employee/orderDelete',
    OrderController.deleteOrder)

  app.post('/employee/paymentCreate',
    PaymentController.createPayment)

  app.post('/employee/paymentDelete',
    PaymentController.deletePayment)

  app.post('/employee/paymentGetAll',
    PaymentController.getAllPayments)

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

  app.post('/employee/reservationList',
    ReservationController.getReservationsById)

  app.post('/employee/reservationCreate',
    ReservationController.createReservation)

  app.post('/employee/reservationChange',
    ReservationController.updateReservation)

  app.post('/employee/reservationDelete',
    ReservationController.deleteReservation)

  app.post('/employee/itemCategoryList',
    ItemCategoryController.getAllCategories)

  app.post('/employee/itemCategoryCreate',
    ItemCategoryController.createCategory)

  app.post('/employee/itemCategoryChange',
    ItemCategoryController.updateCategory)

  app.post('/employee/itemCategoryDelete',
    ItemCategoryController.deleteCategory)

  app.post('/employee/orderStateList',
    OrderStateController.getAllStates)

  app.post('/employee/orderStateCreate',
    OrderStateController.createState)

  app.post('/employee/orderStateChange',
    OrderStateController.updateState)

  app.post('/employee/orderStateDelete',
    OrderStateController.deleteState)

  app.post('/employee/assignRequest',
    RequestController.assignRequest)

  app.post('/employee/requestList',
    RequestController.getAllRequest)

  /* Customer interface  */
  app.post('/customer/Create',
    CustomerController.createCustomer)

  app.post('/customer/tableView',
    TableController.getAllTablesInTime)

  app.post('/customer/orderList',
    OrderController.getCustomerOrders)

  app.post('/customer/ordersCurrent',
    OrderController.getAllOrdersInTime)

  app.post('/customer/ordersNotPaid',
    OrderController.getNotPaidOrders)

  app.post('/customer/orderAdd',
    OrderController.createOrder)

  app.post('/customer/orderInfo',
    OrderController.getOrder)

  app.post('/customer/menu',
    MenuController.getAllMenus)

  app.post('/customer/leave',
    CustomerController.customerLeave)

  app.post('/customer/callEmployee',
    RequestController.createRequest)

  /* Manager interface */
  app.post('/manager/positionsGet',
    EmployeePositionController.getAllPositions)

  app.post('/manager/positionAdd',
    EmployeePositionController.createPosition)

  app.post('/manager/positionChange',
    EmployeePositionController.updatePosition)

  app.post('/manager/positionDelete',
    EmployeePositionController.deletePositions)

  app.post('/manager/employeeGet',
    EmployeeController.getAllEmployees)

  app.post('/manager/employeeAdd',
    EmployeeController.addNewEmployee)

  app.post('/manager/employeeChange',
    EmployeeController.updateEmployee)

  app.post('/manager/employeeDelete',
    EmployeeController.deleteEmployee)
}
