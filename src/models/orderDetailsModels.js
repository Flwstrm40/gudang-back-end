const db = require('../db/db')

class OrderDetailModel {
  getAllOrderDetails(callback) {
    db.query('SELECT * FROM order_details', callback);
  }

  async getOrderDetailById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM order_details where order_detail_id = ?', [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  

  addOrderDetail(order, callback) {
    db.query('INSERT INTO order_details SET ?', [order], callback);
  }

  updateOrderDetail(id, order, callback) {
    db.query('UPDATE order_details SET ? WHERE order_detail_id = ?', [order, id], callback);
  }

  deleteOrderDetail(id, callback) {
    db.query('DELETE FROM order_details WHERE order_detail_id = ?', [id], callback);
  }

  // get total data
  getTotalData(callback) {
    db.query(`SELECT COUNT(*) AS total_order_details FROM order_details`, callback);
  }
}

module.exports = new OrderDetailModel();
