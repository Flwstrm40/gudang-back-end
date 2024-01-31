const db = require('../db/db')

class OrderHistoryModel {
  getAllOrderHistories(callback) {
    db.query('SELECT * FROM order_histories', callback);
  }

  async getOrderHistoryById(id, callback) {
      db.query('SELECT * FROM order_histories where order_histories_id = ?', [id], callback);
  }
  

  addOrderHistory(order, callback) {
    db.query('INSERT INTO order_histories SET ?', [order], callback);
  }

  updateOrderHistory(id, order, callback) {
    db.query('UPDATE order_histories SET ? WHERE order_histories_id = ?', [order, id], callback);
  }

  deleteOrderHistory(id, callback) {
    db.query('DELETE FROM order_histories WHERE order_histories_id = ?', [id], callback);
  }

  // get total data
  getTotalData(callback) {
    db.query(`SELECT COUNT(*) AS total_order_histories FROM order_histories`, callback);
  }
}

module.exports = new OrderHistoryModel();
