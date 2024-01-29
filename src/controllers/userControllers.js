// controllers/userController.js
const userModel = require('../models/userModels');
const fs = require('fs');

class UserController {
  getAllUsers(req, res) {
    userModel.getAllUsers((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        users: result,
      });
    });
  }

  getUserById(req, res) {
    const id = req.params.id;
    userModel.getUserById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(
        result,
      );
    });
  }

  getKepalaGudang(req, res) {
    userModel.getKepalaGudang((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(
        result,
      );
    });
  }

  getAdmin(req, res) {
    userModel.getAdmin((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        admins: result,
    });
    });
  }

  addUser(req, res) {
    const user = req.body;
    userModel.addUser(user, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  updateUser(req, res) {
    const id = req.params.id;
    const user = req.body;
    userModel.updateUser(id, user, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  deleteUser(req, res) {
    const id = req.params.id;
    userModel.deleteUser(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  // reset password
  resetPassword(req, res) {
    const id = req.params.id;
    const user = req.body;
  
    userModel.resetPassword(id, user, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
  
      // Check if the password was successfully updated
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
  
      res.json({ message: 'Password Berhasil di-Reset' });
    });
  }

  // edit profile picture via multer
  uploadProfilePhoto(req, res) {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    const profilePhoto = req.file.path;
    const userId = req.params.id;
  
    // Ambil path foto profil lama dari database
    userModel.getUserById(userId, (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to upload profile photo' });
      }
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Jika pengguna memiliki foto profil sebelumnya, hapus file lama
      if (user[0].profilePhoto) {
        fs.unlink(user[0].profilePhoto, (err) => {
          if (err) {
            console.error('Failed to delete old profile photo:', err);
          }
        });
      }
  
      // Simpan path foto profil baru ke dalam database
      userModel.updateUser(userId, { profilePhoto: profilePhoto }, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to upload profile photo' });
        }
        res.status(200).json({ profilePhoto: profilePhoto });
      });
    });
  }

  // delete profile picture
  deleteProfilePhoto(req, res) {
    const userId = req.params.id; // Ambil ID pengguna dari parameter URL

    userModel.getUserById(userId, (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete profile photo' });
      }
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Cek apakah pengguna memiliki foto profil
      // console.log('Deleting profile photo:', user[0].profilePhoto);
      if (!user[0].profilePhoto) {
        return res.status(400).json({ error: 'User does not have a profile photo' });
      }

      // Hapus file foto profil dari sistem file
      fs.unlink(user[0].profilePhoto, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to delete profile photo' });
        }

        // Setel path foto profil pengguna ke null di database
        userModel.updateUser(userId, { profilePhoto: null }, (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to delete profile photo' });
          }
          res.status(200).json({ message: 'Profile photo deleted successfully' });
        });
      });
    });
  }
 
}

module.exports = new UserController();
