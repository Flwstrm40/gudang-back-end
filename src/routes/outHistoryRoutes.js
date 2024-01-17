const express = require('express');
const router = express.Router();
const OutHistoryController = require('../controllers/outHistoryControllers');

// Get all OutHistories
router.get('/', OutHistoryController.getAllOutHistories);

// Get a OutHistory by ID
router.get('/:id', OutHistoryController.getOutHistoryById);

// Add a new OutHistory
router.post('/', OutHistoryController.addOutHistory);

// Update a OutHistory
router.put('/:id', OutHistoryController.updateOutHistory);

// Delete a OutHistory
router.delete('/:id', OutHistoryController.deleteOutHistory);

module.exports = router;
