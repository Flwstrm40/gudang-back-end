const express = require('express');
const router = express.Router();
const transferHistoryController = require('../controllers/transferHistoryControllers');

// Get all transferHistories
router.get('/', transferHistoryController.getAllTransferHistories);

// Get total transferHistories
router.get('/total', transferHistoryController.getTotalData);

// Get a transferHistory by ID
router.get('/:id', transferHistoryController.getTransferHistoryById);

// Add a new transferHistory
router.post('/', transferHistoryController.addTransferHistory);

// // Update a transferHistory
// router.put('/:id', transferHistoryController.updateTransferHistory);

// // Delete a transferHistory
// router.delete('/:id', transferHistoryController.deleteTransferHistory);



module.exports = router;
