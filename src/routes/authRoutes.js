// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

router.post('/login', authController.login);
router.post('/cekAkun', authController.loginWithoutToken);
router.post('/cekUsername', authController.checkUsernameAvailability);
router.post('/cekUsernameAdd', authController.checkUsernameAvailabilityAdd);

module.exports = router;
