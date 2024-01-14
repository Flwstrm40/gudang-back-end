CREATE TABLE transfers (
    id_transfer INT AUTO_INCREMENT PRIMARY KEY,
    id_produk INT,
    id_toko INT,
    kuantitas INT,
    asal VARCHAR(255),
    keterangan TEXT,
    status INT CHECK (Status IN (0, 1))
);
