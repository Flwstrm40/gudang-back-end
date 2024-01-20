const express = require('express');
const router = express.Router();
const TransferController = require('../controllers/transferControllers');

// Get all transfers
router.get('/', TransferController.getAllTransfer);

// get total transfer
router.get('/total', TransferController.getTotalTransfer);

// Get a transfer by ID
router.get('/:id', TransferController.getTransferById);

// Add a new transfer
router.post('/', TransferController.addTransfer);

// Update a transfer
router.put('/:id', TransferController.updateTransfer);

// Delete a transfer
router.delete('/:id', TransferController.deleteTransfer);


module.exports = router;
