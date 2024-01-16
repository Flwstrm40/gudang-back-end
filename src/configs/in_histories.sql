CREATE TABLE in_histories (
    id_history_masuk INT PRIMARY KEY AUTO_INCREMENT,
    id_produk INT,
    stok_masuk INT,
    tanggal DATE,
    jam TIME,
    keterangan VARCHAR(255)
);
