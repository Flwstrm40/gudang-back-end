CREATE TABLE customers (
    id_customer INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    no_hp VARCHAR(15) NOT NULL,
    alamat TEXT,
    sales_jualan VARCHAR(50),
    id_Produk INT,
    kuantiti INT,
    pembayaran  VARCHAR(50) NOT NULL,
    tanggal DATE,
    jadwal_kirim DATE
);
