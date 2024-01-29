const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/db');

class AuthModel {
  async getUserByUsername(username) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE username COLLATE utf8mb4_bin = ?', [username], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.length > 0 ? results[0] : null);
        }
      });
    });
  }

  async comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }

  generateToken(user) {
    return jwt.sign({ userId: user.id, username: user.username, role: user.role }, process.env.SECRET_KEY, {
      expiresIn: '1h', // Token expiration time
    });
  }

  async isUsernameAvailable(username, userId) {
    const existingUser = await this.getUserByUsername(username);

    // If the username is not taken or belongs to the current user, return true
    return !existingUser || existingUser.id === userId;
  }

  async isUsernameAvailableAdd(username) {
    const existingUser = await this.getUserByUsername(username);

    // If the username is not taken or belongs to the current user, return true
    return !existingUser;
  }

  
}

module.exports = new AuthModel();
