CREATE TABLE out_histories (
    id_history_keluar INT PRIMARY KEY AUTO_INCREMENT,
    id_produk INT NOT NULL,
    tanggal DATE NOT NULL,
    jam TIME NOT NULL,
    stok_keluar INT NOT NULL,
    tipe INT CHECK (tipe IN (0, 1)) NOT NULL,
    pj VARCHAR(50) NOT NULL,
    id_customer INT,
    id_transfer INT,
    harga DECIMAL(10, 2) 
);

ALTER TABLE out_histories
ADD order_id INT null
[after id_customer];