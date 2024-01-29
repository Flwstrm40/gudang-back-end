const orderModel = require("../models/ordersModels");

class OrderController {
  getAllOrders(req, res) {
    orderModel.getAllOrders((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        orders: result,
      });
    });
  }

  getOrderById(req, res) {
    const id = req.params.id;
    // console.log(id)
    // console.log(orderModel.getOrderById(id));
    orderModel.getOrderById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(200).json(result);
    });
  }

  async addOrder(req, res) {
    const order = req.body;
    orderModel.addOrder(order, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }
  
  
  

  updateOrder(req, res) {
    const id = req.params.id;
    const product = req.body;

    orderModel.updateOrder(id, product, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  deleteOrder(req, res) {
    const id = req.params.id;
    orderModel.deleteOrder(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  // get total data
  getTotalData(req, res) {
    orderModel.getTotalData((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

    // get data join from order details
    getOrderJoinDetails(req, res) {
        orderModel.getOrderJoinDetails((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json(result);
        });
    }

}

module.exports = new OrderController();
