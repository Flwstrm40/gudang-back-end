const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'src/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.get('/', userController.getAllUsers);
router.get('/kepala-gudang', userController.getKepalaGudang);
router.get('/admin', userController.getAdmin);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.put('/reset-password/:id', userController.resetPassword);
router.delete('/:id', userController.deleteUser);

// Rute untuk mengunggah foto profil
router.post('/:id/upload-profile-photo', upload.single('profilePhoto'), userController.uploadProfilePhoto);

// Rute untuk menghapus foto profil
router.delete('/:id/delete-profile-photo', userController.deleteProfilePhoto);

module.exports = router;
