const db = require('../db/db')

class inHistoryModels {
  getAllInHistories(callback) {
    db.query('SELECT * FROM in_histories', callback);
  }

  getInHistoryById(id, callback) {
    db.query('SELECT * FROM in_histories WHERE ih.id_history_masuk = ?', [id], callback);
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

  // get sum of stok masuk per month different year
  getSumStokMasukPerMonthDifferentYear(year, callback) {
    db.query(`SELECT YEAR(tanggal) AS tahun, MONTH(tanggal) AS bulan, SUM(stok_masuk) AS total_stok_masuk
              FROM in_histories
              WHERE YEAR(tanggal) = ?
              GROUP BY YEAR(tanggal), MONTH(tanggal)
              ORDER BY tahun, bulan;
              `, [year], callback);
  }
  
}

module.exports = new inHistoryModels();
