const productModel = require('../models/productModels')

class ProductController {
  getAllProducts(req, res) {
    productModel.getAllProducts((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        products: result,
      });
    });
  }

  getProductById(req, res) {
    const id = req.params.id;
    productModel.getProductById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  addProduct(req, res) {
    const product = req.body;
    productModel.addProduct(product, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  updateProduct(req, res) {
    const id = req.params.id;
    const product = req.body;

    productModel.updateProduct(id, product, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  deleteProduct(req, res) {
    const id = req.params.id;
    productModel.deleteProduct(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  async addStock(req, res) {
    try {
      const id = req.params.id;
      const { stok } = req.body;
  
      const result = await new Promise((resolve, reject) => {
        productModel.updateStock(id, stok, (err, result) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });
  
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }  

  // check if kode_produk is available
  async checkKodeProdukAvailability(req, res) {
    try {
      const { kode_produk, id_produk } = req.body;

      // Check if the kode_produk is available (excluding the current user)
      const isKodeProdukAvailable = await productModel.isKodeProdukAvailable(kode_produk, id_produk);

      res.json({ isKodeProdukAvailable });
    } catch (error) {
      console.error('Error during check kode_produk availability:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Controller for transfer stock
  async transferStock(req, res) {
    const { id_produk } = req.params;
    const { stok } = req.body;

    try {
      // Retrieve the current stock of the product
      const currentStock = await productModel.getProductStock(id_produk);

      // Check if the requested transfer quantity is greater than the available stock
      if (stok > currentStock) {
        res.status(400).json({ error: 'Kuantitas yang diminta melebihi stok yang tersedia.'});
        return;
      }

      // Proceed with the stock transfer
      await productModel.transferStock(id_produk, stok);
      res.json({ message: 'Berhasil melakukan transfer stok' });
    } catch (error) {
      console.error('Error during stock transfer:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Controller for checking product stock
  async checkStock(req, res) {
    const { id_produk } = req.params;

    try {
      const stock = await productModel.getProductStock(id_produk);
      res.json({ stock });
    } catch (error) {
      console.error('Error during check stock:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Controller to get total products
  getTotalProduct(req, res) {
    productModel.getTotalProduct((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }
}

module.exports = new ProductController();
