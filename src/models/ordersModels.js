const db = require('../db/db')

class OrderModel {
  getAllOrders(callback) {
    db.query('SELECT * FROM orders', callback);
  }

  async getOrderById(id, callback) {
      db.query('SELECT * FROM orders where order_id = ?', [id], callback);
  }

  addOrder(order, callback) {
    db.query('INSERT INTO orders SET ?', [order], callback);
  }

  updateOrder(id, order, callback) {
    db.query('UPDATE orders SET ? WHERE order_id = ?', [order, id], callback);
  }

  deleteOrder(id, callback) {
    db.query('DELETE FROM orders WHERE order_id = ?', [id], callback);
  }

  // get total data
  getTotalData(callback) {
    db.query(`SELECT COUNT(*) AS total_orders FROM orders WHERE status_terima = 0`, callback);
  }

  // get data join from order details
    getOrderJoinDetails(callback) {
        db.query(`
    SELECT
        o.order_id AS id,
        o.sales_order AS id_SO,
        o.nama_cust,
        o.no_telp,
        o.alamat,
        o.nama_sales,
        o.tanggal_order AS tanggal_transaksi,
        o.jadwal_kirim,
        o.total_harga,
        o.total_dp1,
        o.metode_bayar_dp1 AS metode_dp1,
        o.total_dp2,
        o.metode_bayar_dp2 AS metode_dp2,
        o.balance_due,
        o.status_terima,
        GROUP_CONCAT(od.kode_produk) AS kode_produk,
        GROUP_CONCAT(od.nama_produk) AS nama_produk,
        GROUP_CONCAT(od.harga_per_item_setelah_ppn) AS harga_item_ppn,
        GROUP_CONCAT(od.qty) AS qty,
        GROUP_CONCAT(od.remarks) AS remarks
    FROM orders o
    JOIN order_details od ON o.order_id = od.order_id
    GROUP BY o.order_id;`, callback);
    }
}

module.exports = new OrderModel();
