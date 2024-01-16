CREATE TABLE in_histories (
    id_history_masuk INT PRIMARY KEY AUTO_INCREMENT,
    id_produk INT NOT NULL,
    stok_masuk INT NOT NULL,
    tanggal DATE NOT NULL,
    jam TIME NOT NULL,
    keterangan VARCHAR(255),
    pj VARCHAR(50) NOT NULL
);
