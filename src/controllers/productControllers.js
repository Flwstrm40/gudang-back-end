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
}

module.exports = new ProductController();
