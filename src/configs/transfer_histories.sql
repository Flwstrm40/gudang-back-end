CREATE TABLE transfer_histories (
    id_transfer_histories INT PRIMARY KEY AUTO_INCREMENT,
    id_transfer INT NOT NULL,
    kuantitas INT NOT NULL,
    asal VARCHAR(255) NOT NULL,
    keterangan TEXT NOT NULL,
    nama_toko VARCHAR(255) NOT NULL,
    kode_produk VARCHAR(50) NOT NULL,
    nama_produk VARCHAR(255) NOT NULL,
    stok INT NOT NULL,
    deskripsi TEXT NOT NULL,
    harga DECIMAL(10, 2) NOT NULL
);
