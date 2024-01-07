// controllers/userController.js
const userModel = require('../models/userModels');

class UserController {
  getAllUsers(req, res) {
    userModel.getAllUsers((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  getUserById(req, res) {
    const id = req.params.id;
    userModel.getUserById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
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
}

module.exports = new UserController();
