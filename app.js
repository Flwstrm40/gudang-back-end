const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');

const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes for the user entity
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5055;
app.listen(PORT ,() => {
  console.log('Server is running on port', PORT);
  console.log(`http://localhost:${PORT}`);
});