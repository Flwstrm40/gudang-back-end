const orderHistoryModel = require("../models/orderHistoryModels");

class OrderHistoryController {
  getAllOrderHistories(req, res) {
    orderHistoryModel.getAllOrderHistories((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        order_Historys: result,
      });
    });
  }

  getOrderHistoryById(req, res) {
    const id = req.params.id;
    // console.log(id)
    // console.log(orderHistoryModel.getOrderHistoryById(id));
    orderHistoryModel.getOrderHistoryById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(200).json(result);
    });
  }

  async addOrderHistory(req, res) {
    const order = req.body;
    orderHistoryModel.addOrderHistory(order, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  // updateOrderHistory(req, res) {
  //   const id = req.params.id;
  //   const product = req.body;

  //   orderHistoryModel.updateOrderHistory(id, product, (err, result) => {
  //     if (err) {
  //       res.status(500).json({ error: err.message });
  //       return;
  //     }
  //     res.json(result);
  //   });
  // }

  // deleteOrderHistory(req, res) {
  //   const id = req.params.id;
  //   orderHistoryModel.deleteOrderHistory(id, (err, result) => {
  //     if (err) {
  //       res.status(500).json({ error: err.message });
  //       return;
  //     }
  //     res.json(result);
  //   });
  // }

  // get total data
  getTotalData(req, res) {
    orderHistoryModel.getTotalData((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  
}

module.exports = new OrderHistoryController();
