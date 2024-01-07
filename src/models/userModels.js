// models/userModel.js
const db = require('../db/db');
const bcrypt = require('bcrypt');

class UserModel {
  getAllUsers(callback) {
    db.query('SELECT * FROM users', callback);
  }

  getUserById(id, callback) {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  }

  async addUser(users, callback) {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(users.password, 10);
    const newUser = {
      username: users.username,
      password: hashedPassword,
      role: users.role,
    };

    db.query('INSERT INTO users SET ?', newUser, callback);
  }

  async updateUser(id, users, callback) {
    // Hash the new password before updating the users
    if (users.password) {
      users.password = await bcrypt.hash(users.password, 10);
    }

    db.query('UPDATE users SET ? WHERE id = ?', [users, id], callback);
  }

  deleteUser(id, callback) {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
  }
}

module.exports = new UserModel();
