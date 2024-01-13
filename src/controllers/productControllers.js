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

  addStock(req, res) {
    const id = req.params.id;
    const { stok } = req.body;
    
    productModel.updateStock(id, stok, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
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
}

module.exports = new ProductController();
