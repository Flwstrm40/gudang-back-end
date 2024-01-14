const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeControllers');

// Get all stores
router.get('/', storeController.getAllStores);

// Get a store by ID
router.get('/:id', storeController.getStoreById);

// Add a new store
router.post('/', storeController.addStore);

// Update a store
router.put('/:id', storeController.updateStore);

// Delete a store
router.delete('/:id', storeController.deleteStore);


module.exports = router;
