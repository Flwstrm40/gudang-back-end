const db = require('../db/db')

class outHistoryModels {
  getAllOutHistories(callback) {
    db.query('SELECT oh.*, p.*, t.*, s.*, c.* FROM out_histories oh LEFT JOIN products p ON oh.id_produk = p.id_produk LEFT JOIN transfers t ON oh.id_transfer = t.id_transfer LEFT JOIN stores s ON t.id_toko = s.id_toko LEFT JOIN customers c ON oh.id_customer = c.id_customer', callback);
  }

  getOutHistoryById(id, callback) {
    db.query('SELECT oh.*, p.*, t.*, s.*, c.nama FROM out_histories oh, products p, transfers t, stores s, customers c WHERE oh.id_produk = p.id_produk and oh.id_transfer = t.id_transfer and t.id_toko = s.id_toko and oh.id_customer = c.id_customer and oh.id_history_keluar = ?', [id], callback);
  }

  addOutHistory(historyKeluar, callback) {
    db.query('INSERT INTO out_histories SET ?', [historyKeluar], callback);
  }

  updateOutHistory(id, historyKeluar, callback) {
    db.query('UPDATE out_histories SET ? WHERE id_history_keluar = ?', [historyKeluar, id], callback);
  }

  deleteOutHistory(id, callback) {
    db.query('DELETE FROM out_histories WHERE id_history_keluar = ?', [id], callback);
  }
}

module.exports = new outHistoryModels();
