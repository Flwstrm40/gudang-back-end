const db = require('../db/db')

class StoreModel {
  getAllStores(callback) {
    db.query('SELECT * FROM stores', callback);
  }

  getStoreById(id, callback) {
    db.query('SELECT * FROM stores WHERE id_toko = ?', [id], callback);
  }

  addStore(store, callback) {
    db.query('INSERT INTO stores SET ?', [store], callback);
  }

  updateStore(id, store, callback) {
    db.query('UPDATE stores SET ? WHERE id_toko = ?', [store, id], callback);
  }

  deleteStore(id, callback) {
    db.query('DELETE FROM stores WHERE id_toko = ?', [id], callback);
  }
}

module.exports = new StoreModel();
