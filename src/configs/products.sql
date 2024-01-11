CREATE TABLE nama_produkroducts (
  id_produk INT PRIMARY KEY AUTO_INCREMENT,
  kode_produk VARCHAR(50) NOT NULL,
  nama_produk VARCHAR(255) NOT NULL,
  stok INT NOT NULL,
  deskripsi TEXT,
  harga DECIMAL(10, 2) NOT NULL
);
