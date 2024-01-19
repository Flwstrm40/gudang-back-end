const db = require('../db/db')

class CustomerModel {
  getAllCustomers(callback) {
    db.query('SELECT c.*, p.* FROM customers c, products p WHERE c.id_produk = p.id_produk', callback);
  }

  async getCustomerById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT c.*, p.* FROM customers c, products p WHERE c.id_produk = p.id_produk AND c.id_produk = ?', [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  

  addCustomer(customer, callback) {
    db.query('INSERT INTO customers SET ?', [customer], callback);
  }

  updateCustomer(id, customer, callback) {
    db.query('UPDATE customers SET ? WHERE id_transfer = ?', [customer, id], callback);
  }

  deleteCustomer(id, callback) {
    db.query('DELETE FROM customers WHERE id_transfer = ?', [id], callback);
  }
}

module.exports = new CustomerModel();
