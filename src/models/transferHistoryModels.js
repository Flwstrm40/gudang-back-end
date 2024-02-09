const db = require('../db/db')

class TransferHistoryModel {
  getAllTransferHistories(callback) {
    db.query('SELECT * FROM transfer_histories', callback);
  }

  async getTransferHistoryById(id, callback) {
      db.query('SELECT * FROM transfer_histories where transfer_histories_id = ?', [id], callback);
  }
  

  addTransferHistory(transfer, callback) {
    db.query('INSERT INTO transfer_histories SET ?', [transfer], callback);
  }

  updateTransferHistory(id, transfer, callback) {
    db.query('UPDATE transfer_histories SET ? WHERE transfer_histories_id = ?', [transfer, id], callback);
  }

  deleteTransferHistory(id, callback) {
    db.query('DELETE FROM transfer_histories WHERE transfer_histories_id = ?', [id], callback);
  }

  // get total data
  getTotalData(callback) {
    db.query(`SELECT COUNT(*) AS total_transfer_histories FROM transfer_histories`, callback);
  }
}

module.exports = new TransferHistoryModel();
