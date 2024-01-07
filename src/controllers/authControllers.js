// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/db');

class AuthController {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      console.log(username);
      console.log(password);

      // Check if the username exists in the database
      db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) {
          console.error('Error fetching user:', err);
          return res.status(500).json({ message: 'Internal Server Error' });
        }

        const user = results.length > 0 ? results[0] : null;

        if (!user) {
          return res.status(401).json({ message: 'Invalid username' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id, username: user.username, role: user.role }, process.env.SECRET_KEY, {
          expiresIn: '1h', // Token expiration time
        });

        // Set the token in a cookie (you can also store it in the client's localStorage)
        res.cookie('token', token, { httpOnly: true });

        // Send success response with user details
        res.json({ userId: user.id, username: user.username, role: user.role, token });
      });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // You can add more authentication-related methods here
}

module.exports = new AuthController();
