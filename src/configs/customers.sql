CREATE TABLE customers (
    id_customer INT AUTO_INCREMENT PRIMARY KEY,
    nama_cust VARCHAR(255) NOT NULL,
    no_hp VARCHAR(15) NOT NULL,
    alamat TEXT,
    sales_jualan VARCHAR(50),
    id_produk INT,
    kuantiti INT,
    pembayaran  VARCHAR(50) NOT NULL,
    tanggal_order DATE,
    jadwal_kirim DATE,
    status_terima ENUM('0', '1') DEFAULT '0',
);
