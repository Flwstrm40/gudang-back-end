const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderControllers');

// Get all orders
router.get('/', orderController.getAllOrders);

// Get total orders
router.get('/total', orderController.getTotalData);

// Get order join details
router.get('/details', orderController.getOrderJoinDetails);

// Get a order by ID
router.get('/:id', orderController.getOrderById);

// Add a new order
router.post('/', orderController.addOrder);

// Update a order
router.put('/:id', orderController.updateOrder);

// Delete a order
router.delete('/:id', orderController.deleteOrder);



module.exports = router;
