CREATE TABLE out_histories (
    id_history_keluar INT PRIMARY KEY AUTO_INCREMENT,
    id_produk INT NOT NULL,
    tanggal DATE NOT NULL,
    jam TIME NOT NULL,
    tipe INT CHECK (tipe IN (0, 1)) NOT NULL,
    pj VARCHAR(50) NOT NULL,
    id_customer INT,
    id_transfer INT,
    
);
