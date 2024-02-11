const db = require('../db/db')

class outHistoryModels {
    getAllOutHistories(callback) {
        db.query(`SELECT 
                    oh.id_history_keluar AS s_id_history_keluar,
                    oh.tanggal AS s_tanggal,
                    oh.jam AS s_jam,
                    oh.stok_keluar AS s_stok_keluar,
                    oh.tipe AS s_tipe,
                    oh.pj AS s_pj,
                    oh.id_transfer AS s_id_transfer,
                    oh.harga_jual AS s_harga_jual,
                    t.kode_produk AS s_kode_produk,
                    t.nama_produk AS s_nama_produk,
                    t.stok AS s_stok,
                    t.deskripsi AS s_deskripsi,
                    t.harga AS s_harga_produk,
                    t.id_transfer_histories,
                    t.kuantitas,
                    t.asal,
                    t.keterangan,
                    t.nama_toko,    
                    orh.*
                FROM 
                    out_histories oh 
                LEFT JOIN 
                    transfer_histories t ON oh.id_transfer = t.id_transfer_histories 
                LEFT JOIN 
                    order_histories orh ON oh.order_id = orh.order_histories_id;
                `, callback);
    }

    getOutHistoryById(id, callback) {
        db.query(`SELECT 
                    oh.id_history_keluar AS s_id_history_keluar,
                    oh.tanggal AS s_tanggal,
                    oh.jam AS s_jam,
                    oh.stok_keluar AS s_stok_keluar,
                    oh.tipe AS s_tipe,
                    oh.pj AS s_pj,
                    oh.id_transfer AS s_id_transfer,
                    oh.harga_jual AS s_harga_jual,
                    t.kode_produk AS s_kode_produk,
                    t.nama_produk AS s_nama_produk,
                    t.stok AS s_stok,
                    t.deskripsi AS s_deskripsi,
                    t.harga AS s_harga_produk,
                    t.id_transfer_histories,
                    t.kuantitas,
                    t.asal,
                    t.keterangan,
                    t.nama_toko,    
                    orh.*
                FROM 
                    out_histories oh 
                LEFT JOIN 
                    transfer_histories t ON oh.id_transfer = t.id_transfer_histories 
                LEFT JOIN 
                    order_histories orh ON oh.order_id = orh.order_histories_id
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

    // get sum of stok keluar per month different year
    getSumStokKeluarPerMonthDifferentYear(year, callback) {
        db.query(`SELECT YEAR(tanggal) AS tahun, MONTH(tanggal) AS bulan, SUM(stok_keluar) AS total_stok_keluar
                FROM out_histories
                WHERE YEAR(tanggal) = ?
                GROUP BY YEAR(tanggal), MONTH(tanggal)
                ORDER BY tahun, bulan;
                `, [year], callback);
    }
}

module.exports = new outHistoryModels();
