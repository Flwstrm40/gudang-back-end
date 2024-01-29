const orderDetailModel = require("../models/orderDetailsModels");

class OrderDetailController {
  getAllOrderDetails(req, res) {
    orderDetailModel.getAllOrderDetails((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        order_details: result,
      });
    });
  }

  getOrderDetailById(req, res) {
    const id = req.params.id;
    // console.log(id)
    // console.log(orderDetailModel.getOrderDetailById(id));
    orderDetailModel.getOrderDetailById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(200).json(result);
    });
  }

  async addOrderDetail(req, res) {
    const order = req.body;
    orderDetailModel.addOrderDetail(order, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  updateOrderDetails(req, res) {
    const id = req.params.id;
    const product = req.body;

    orderDetailModel.updateOrderDetails(id, product, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  deleteOrderDetails(req, res) {
    const id = req.params.id;
    orderDetailModel.deleteOrderDetails(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  // get total data
  getTotalData(req, res) {
    orderDetailModel.getTotalData((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  
}

module.exports = new OrderDetailController();
