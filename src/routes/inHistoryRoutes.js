const express = require('express');
const router = express.Router();
const InHistoryController = require('../controllers/inHistoryControllers');

// Get all inHistories
router.get('/', InHistoryController.getAllInHistories);

// Get sum of stok masuk per month different year
router.get('/rekapStokMasuk/:year', InHistoryController.getSumStokMasukPerMonthDifferentYear);

// Get a inHistory by ID
router.get('/:id', InHistoryController.getInHistoryById);

// Add a new inHistory
router.post('/', InHistoryController.addInHistory);

// Update a inHistory
router.put('/:id', InHistoryController.updateInHistory);

// Delete a inHistory
router.delete('/:id', InHistoryController.deleteInHistory);

module.exports = router;
