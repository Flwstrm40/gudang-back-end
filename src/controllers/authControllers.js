const authModel = require('../models/authModels');

class AuthController {
  async login(req, res) {
    try {
      const { username, password } = req.body;

      // Check if the username exists in the database
      const user = await authModel.getUserByUsername(username);

      if (!user) {
        return res.status(401).json({ message: 'Invalid username' });
      }

      // Check if the password is correct
      const isPasswordValid = await authModel.comparePassword(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Generate JWT token
      const token = authModel.generateToken(user);

      // Set the token in a cookie (you can also store it in the client's localStorage)
      res.cookie('token', token, { httpOnly: true });

      // Send success response with user details
      res.json({ userId: user.id, username: user.username, role: user.role, token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async loginWithoutToken(req, res) {
    try {
      const { username, password } = req.body;

      const user = await authModel.getUserByUsername(username);

      if (!user) {
        return res.status(401).json({ message: 'Invalid username' });
      }

      // Check if the password is correct
      const isPasswordValid = await authModel.comparePassword(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      res.json({ userId: user.id, username: user.username });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async checkUsernameAvailability(req, res) {
    try {
      const { username, userId } = req.body;

      // Check if the username is available (excluding the current user)
      const isUsernameAvailable = await authModel.isUsernameAvailable(username, userId);

      res.json({ isUsernameAvailable });
    } catch (error) {
      console.error('Error checking username availability:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // check username availbitlity for add user
  async checkUsernameAvailabilityAdd(req, res) {
    try {
      const { username } = req.body;

      // Check if the username is available (excluding the current user)
      const isUsernameAvailable = await authModel.isUsernameAvailableAdd(username);

      res.json({ isUsernameAvailable });
    } catch (error) {
      console.error('Error checking username availability:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
}

module.exports = new AuthController();
