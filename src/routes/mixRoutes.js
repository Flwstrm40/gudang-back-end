const express = require('express');
const router = express.Router();
const MixController = require('../controllers/mixControllers');

// Get all total mix
router.get('/total', MixController.getTotalMix);


module.exports = router;
