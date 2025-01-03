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

  //check if kode_produk is available
  async getProductByKodeProduk(kode_produk) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM products WHERE kode_produk = ?', [kode_produk], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.length > 0 ? results[0] : null);
        }
      });
    });
  }

  async isKodeProdukAvailable(kode_produk, id_produk) {
    const existingProduct = await this.getProductByKodeProduk(kode_produk);

    // If the kode_produk is not taken or belongs to the current user, return true
    return !existingProduct || existingProduct.id_produk === id_produk;
  }

  // get stock by id
  getProductStock(id_produk) {
    return new Promise((resolve, reject) => {
      db.query('SELECT stok FROM products WHERE id_produk = ?', [id_produk], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.length > 0 ? results[0].stok : 0);
        }
      });
    });
  }

  // transfer stock
  async transferStock(id_produk, jumlah) {
    const stok = await this.getProductStock(id_produk);

    return new Promise((resolve, reject) => {
      if (stok < jumlah) {
        reject(new Error('Insufficient stock for transfer'));
        return;
      }

      db.query('UPDATE products SET stok = ? WHERE id_produk = ?', [stok - jumlah, id_produk], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // get total products
  getTotalProduct(callback) {
    db.query('SELECT COUNT(*) AS total_product FROM products', callback);
  }

}

module.exports = new ProductModel();
