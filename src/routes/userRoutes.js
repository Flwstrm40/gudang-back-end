// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/', userController.getAllUsers);
router.get('/kepala-gudang', userController.getKepalaGudang);
router.get('/admin', userController.getAdmin);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
