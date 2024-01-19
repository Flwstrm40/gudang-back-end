const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customerControllers');

// Get all Customers
router.get('/', CustomerController.getAllCustomers);

// Get a Customer by ID
router.get('/:id', CustomerController.getCustomerById);

// Add a new Customer
router.post('/', CustomerController.addCustomer);

// Update a Customer
router.put('/:id', CustomerController.updateCustomer);

// Delete a Customer
router.delete('/:id', CustomerController.deleteCustomer);


module.exports = router;
