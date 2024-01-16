const db = require('../db/db')

class inHistoryModels {
  getAllInHistories(callback) {
    db.query('SELECT ih.*, p.* FROM in_histories ih, products p WHERE ih.id_produk = p.id_produk', callback);
  }

  getInHistoryById(id, callback) {
    db.query('SELECT ih.*, p.* FROM in_histories ih, products p WHERE ih.id_produk = p.id_produk and ih.id_history_masuk = ?', [id], callback);
  }

  addInHistory(historyMasuk, callback) {
    db.query('INSERT INTO in_histories SET ?', [historyMasuk], callback);
  }

  updateInHistory(id, historyMasuk, callback) {
    db.query('UPDATE in_histories SET ? WHERE id_history_masuk = ?', [historyMasuk, id], callback);
  }

  deleteInHistory(id, callback) {
    db.query('DELETE FROM in_histories WHERE id_history_masuk = ?', [id], callback);
  }
}

module.exports = new inHistoryModels();
