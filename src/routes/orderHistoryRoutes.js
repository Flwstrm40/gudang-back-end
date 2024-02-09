const express = require('express');
const router = express.Router();
const orderHistoryController = require('../controllers/orderHistoryControllers');

// Get all orderHistories
router.get('/', orderHistoryController.getAllOrderHistories);

// Get total orderHistories
router.get('/total', orderHistoryController.getTotalData);

// Get a orderHistory by ID
router.get('/:id', orderHistoryController.getOrderHistoryById);

// Add a new orderHistory
router.post('/', orderHistoryController.addOrderHistory);

// // Update a orderHistory
// router.put('/:id', orderHistoryController.updateOrderHistory);

// // Delete a orderHistory
// router.delete('/:id', orderHistoryController.deleteOrderHistory);



module.exports = router;
