const db = require('../db/db')

class TransferModel {
  getAllTransfer(callback) {
    db.query('SELECT t.id_transfer, t.id_produk, t.id_toko, t.kuantitas, t.asal, t.keterangan, t.status, s.nama_toko, p.* FROM transfers t, stores s, products p WHERE t.id_toko = s.id_toko and t.id_produk = p.id_produk', callback);
  }

  async getTransferById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT t.id_transfer, t.id_produk, t.id_toko, t.kuantitas, t.asal, t.keterangan, t.status, s.nama_toko, p.* FROM transfers t, stores s, products p WHERE t.id_toko = s.id_toko and t.id_produk = p.id_produk AND t.id_transfer = ?', [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  

  // getTransferById(id) {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       'SELECT t.id_transfer, t.id_produk, t.id_toko, t.kuantitas, t.asal, t.keterangan, t.status, s.nama_toko, p.* FROM transfers t, stores s, products p WHERE t.id_toko = s.id_toko and t.id_produk = p.id_produk AND t.id_transfer = ?',
  //       [id],
  //       (err, result) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(result[0]); 
  //         }
  //       }
  //     );
  //   });
  // }

  addTransfer(transfer, callback) {
    db.query('INSERT INTO transfers SET ?', [transfer], callback);
  }

  updateTransfer(id, transfer, callback) {
    db.query('UPDATE transfers SET ? WHERE id_transfer = ?', [transfer, id], callback);
  }

  deleteTransfer(id, callback) {
    db.query('DELETE FROM transfers WHERE id_transfer = ?', [id], callback);
  }
}

module.exports = new TransferModel();
