const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

// Get all products
router.get('/', productController.getAllProducts);

// Get a product by ID
router.get('/:id', productController.getProductById);

// Add a new product
router.post('/', productController.addProduct);

// Update a product
router.put('/:id', productController.updateProduct);

// Update stock
router.put('/addStock/:id', productController.addStock);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
