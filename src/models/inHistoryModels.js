const db = require('../db/db')

class inHistoryModels {
  getAllInHistories(callback) {
    db.query('SELECT * FROM in_histories', callback);
  }

  getInHistoryById(id, callback) {
    db.query('SELECT * FROM in_histories WHERE id_history_masuk = ?', [id], callback);
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
