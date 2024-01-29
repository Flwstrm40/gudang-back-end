CREATE TABLE order_details (
    order_detail_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    kode_produk VARCHAR(20),
    nama_produk VARCHAR(255),
    harga_per_item_setelah_ppn DECIMAL(10, 2),
    qty INT,
    remarks TEXT,
    -- FOREIGN KEY (order_id) REFERENCES Orders(id)
);