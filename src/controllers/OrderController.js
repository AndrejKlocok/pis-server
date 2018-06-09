const {Order} = require('../../models')
const {Item} = require('../../models')
const {Customer} = require('../../models')
const {OrderState} = require('../../models')
const {Payment} = require('../../models')
const {Sequelize} = require('../../models')
/**
 * Module handles CRUD operations with table Orders.
 */
module.exports = {
  /**
    * Creates an instance of order.
    */
  async createOrder (req, res) {
    try {
      const {itemId, customerId, name, detail, employeeId} = req.body
      var sum = 0
      /*  Search items from ids in itemId field and accumulate sum (price) */
      for (var i = 0, len = itemId.length; i < len; i++) {
        var itemF = await Item.findOne({ where:
          { id: itemId[i] }})
        sum += itemF.price
      }
      const order = await Order.create({
        name: name,
        detail: detail,
        sum: sum,
        paymentId: null,
        customerId: customerId,
        orderStateId: 1,
        employeeId: employeeId
      }, {
        include: [Item]
      })
      order.setItems(itemId)
      res.send(order)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
  /**
    * Returns all customer orders by given customerId.
    */
  async getCustomerOrders (req, res) {
    try {
      const customerId = req.param('customerId')
      const order = await Order.findAll({
        include: OrderState,
        where: {
          customerId: customerId
        }
      })
      res.send(order)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Return order by orderId with its items, state, payment.
    */
  async getOrder (req, res) {
    try {
      const orderId = req.param('orderId')
      const order = await Order.findOne({
        include: [{
          model: Item
        },
        {
          model: OrderState
        },
        {
          model: Payment
        }],
        where: {
          id: orderId
        }
      })
      res.send(order)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Updates order by given data.
    */
  async updateOrder (req, res) {
    try {
      const {id, itemId, customerId, name, detail, employeeId} = req.body
      var sum = 0
      /*  Search items from ids in itemId field and accumulate sum (price) */
      for (var i = 0, len = itemId.length; i < len; i++) {
        var itemF = await Item.findOne({ where:
          { id: itemId[i] }})
        sum += itemF.price
      }
      var order = await Order.update({
        name: name,
        detail: detail,
        sum: sum,
        paymentId: null,
        customerId: customerId,
        orderStateId: 1,
        employeeId: employeeId
      }, {
        include: [Item],
        where: {
          id: id
        }
      })
      order.setItems(itemId)
      res.send(order)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during updating'
      })
    }
  },
  /**
    * Deletes order by given id.
    */
  async deleteOrder (req, res) {
    try {
      const {id} = req.body
      await Order.destroy({
        where: {
          id: id
        }
      })
      const order = await Order.findAll({
      })
      res.send(order)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during deleting'
      })
    }
  },
  /**
    * Returns all orders from db.
    */
  async getAllOrders (req, res) {
    try {
      const orders = await Order.findAll()
      res.send(orders)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Returns all orders of customer by given customerId, which are not paid.
    */
  async getNotPaidOrders (req, res) {
    try {
      const customerId = req.param('customerId')
      const orders = await Order.findAll({
        where: {
          customerId: customerId,
          paymentId: null
        }
      })
      res.send(orders)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  /**
    * Returns all orders of customers later than given time.
    */
  async getAllOrdersInTime (req, res) {
    try {
      const time = req.param('time')
      const Op = Sequelize.Op
      const orders = await Order.findAll({
        include: [{
          model: Customer,
          where: Sequelize.and(
            {
              dateIn: {
                [Op.lt]: time
              }
            },
            Sequelize.or(
              {
                dateOut: null
              },
              {
                dateOut: {
                  [Op.gt]: time
                }
              }
            )
          )
        }]
      })
      res.send(orders)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  }
}
