const db = require('../db/db')

class MixModel {
  // get total transfer, toal product, and total customer
  getTotalMix(callback) {
    db.query(`SELECT (SELECT COUNT(*) FROM customers WHERE status_terima = '0') AS total_customers, (SELECT COUNT(*) FROM transfers WHERE status = 0) AS total_transfers, (SELECT COUNT(*) FROM products) AS total_products`, callback);
  }
}

module.exports = new MixModel();
