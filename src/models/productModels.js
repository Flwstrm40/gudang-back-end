const db = require('../db/db')

class ProductModel {
  getAllProducts(callback) {
    db.query('SELECT * FROM products', callback);
  }

  getProductById(id, callback) {
    db.query('SELECT * FROM products WHERE id_produk = ?', [id], callback);
  }

  addProduct(product, callback) {
    db.query('INSERT INTO products SET ?', [product], callback);
  }

  updateProduct(id, product, callback) {
    db.query('UPDATE products SET ? WHERE id_produk = ?', [product, id], callback);
  }

  updateStock(id, stok, callback) {
    db.query('UPDATE products SET stok = stok + ? WHERE id_produk = ?', [stok, id], callback);
  }

  deleteProduct(id, callback) {
    db.query('DELETE FROM products WHERE id_produk = ?', [id], callback);
  }
}

module.exports = new ProductModel();
