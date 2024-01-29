CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    nama_cust VARCHAR(255),
    no_telp VARCHAR(15),
    alamat VARCHAR(255),
    nama_sales VARCHAR(255),
    jadwal_kirim DATE,
    total_harga DECIMAL(10, 2),
    total_dp1 DECIMAL(10, 2) null,
    metode_bayar_dp1 VARCHAR(50) null,
    total_dp2 DECIMAL(10, 2) null,
    metode_bayar_dp2 VARCHAR(50) null,
    balance_due DECIMAL(10, 2),
    status_terima INT CHECK (status_terima IN (0, 1))
);