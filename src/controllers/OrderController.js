const {Order} = require('../../models')
const {Item} = require('../../models')
const {Customer} = require('../../models')
const {OrderState} = require('../../models')
const {Payment} = require('../../models')
const {Sequelize} = require('../../models')

module.exports = {
  async createOrder (req, res) {
    try {
      const {itemId, customerId, name, detail, employeeId} = req.body
      var sum = 0
      for (var i = 0, len = itemId.length; i < len; i++) {
        var itemF = await Item.findOne({ where:
          { id: itemId[i] }})
        sum += itemF.price
        console.log(itemF.price)
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
  async getCustomerOrders (req, res) {
    try {
      const {customerId} = req.body
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
  async getOrder (req, res) {
    try {
      const {orderId} = req.body
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

      console.log(order)
      res.send(order)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async updateOrder (req, res) {
    try {
      const {id, itemId, customerId, name, detail, employeeId} = req.body
      var sum = 0
      for (var i = 0, len = itemId.length; i < len; i++) {
        var itemF = await Item.findOne({ where:
          { id: itemId[i] }})
        sum += itemF.price
        console.log(itemF.price)
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
        error: 'An error has occured during creating'
      })
    }
  },
  async deleteOrder (req, res) {
    try {
      const {id} = req.body
      Order.destroy({
        where: {
          id: id
        }
      })
      const order = await Order.findAll({
        // podmienka
      })
      res.send(order)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured during creating'
      })
    }
  },
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
  async customerLeave (req, res) {
    try {
      const {customerId} = req.body
      const orders = await Order.findAll({
        where: {
          customerId: customerId,
          paymentId: null
        }
      })
      if (orders.length === 0) {
        Customer.update({
          dateOut: new Date()}, {
          where: {
            id: customerId
          }
        }).error(err => {
          console.log(err)
        })
      }
      res.send(orders)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured during fetch'
      })
    }
  },
  async getAllOrdersInTime (req, res) {
    try {
      const {time} = req.body
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
