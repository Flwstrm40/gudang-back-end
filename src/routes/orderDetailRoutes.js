const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetailControllers');

// Get all orderDetails
router.get('/', orderDetailController.getAllOrderDetails);

// Get total orderDetails
router.get('/total', orderDetailController.getTotalData);

// Get a orderDetail by ID
router.get('/:id', orderDetailController.getOrderDetailById);

// Add a new orderDetail
router.post('/', orderDetailController.addOrderDetail);

// Update a orderDetail
router.put('/:id', orderDetailController.updateOrderDetails);

// Delete a orderDetail
router.delete('/:id', orderDetailController.deleteOrderDetails);



module.exports = router;
