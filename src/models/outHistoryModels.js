const db = require('../db/db')

class outHistoryModels {
  getAllOutHistories(callback) {
    db.query(`SELECT 
                  oh.id_history_keluar AS s_id_history_keluar,
                  oh.id_produk AS s_id_produk,
                  oh.tanggal AS s_tanggal,
                  oh.jam AS s_jam,
                  oh.tipe AS s_tipe,
                  oh.pj AS s_pj,
                  oh.id_transfer AS s_id_transfer,
                  oh.harga_jual AS s_harga_jual,
                  p.id_produk AS s_id_produk,
                  p.kode_produk AS s_kode_produk,
                  p.nama_produk AS s_nama_produk,
                  p.stok AS s_stok,
                  p.deskripsi AS s_deskripsi,
                  p.harga AS s_harga_produk,
                  t.*,
                  s.*,
                  orh.*
              FROM 
                  out_histories oh 
              LEFT JOIN 
                  products p ON oh.id_produk = p.id_produk 
              LEFT JOIN 
                  transfers t ON oh.id_transfer = t.id_transfer 
              LEFT JOIN 
                  stores s ON t.id_toko = s.id_toko 
              LEFT JOIN 
                  order_histories orh ON oh.order_id = orh.order_id;
              `, callback);
  }

  getOutHistoryById(id, callback) {
    db.query(`SELECT 
                  oh.id_history_keluar AS s_id_history_keluar,
                  oh.id_produk AS s_id_produk,
                  oh.tanggal AS s_tanggal,
                  oh.jam AS s_jam,
                  oh.tipe AS s_tipe,
                  oh.pj AS s_pj,
                  oh.id_transfer AS s_id_transfer,
                  oh.harga_jual AS s_harga_jual,
                  p.id_produk AS s_id_produk,
                  p.kode_produk AS s_kode_produk,
                  p.nama_produk AS s_nama_produk,
                  p.stok AS s_stok,
                  p.deskripsi AS s_deskripsi,
                  p.harga AS s_harga_produk,
                  t.*,
                  s.*,
                  orh.*
              FROM 
                  out_histories oh 
              LEFT JOIN 
                  products p ON oh.id_produk = p.id_produk 
              LEFT JOIN 
                  transfers t ON oh.id_transfer = t.id_transfer 
              LEFT JOIN 
                  stores s ON t.id_toko = s.id_toko 
              LEFT JOIN 
                  order_histories orh ON oh.order_id = orh.order_id
 and oh.id_history_keluar = ?`, [id], callback);
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
