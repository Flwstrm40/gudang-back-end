const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require("cors");

//import routes
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const storeRoutes = require('./src/routes/storeRoutes');
const transferRoutes = require('./src/routes/transferRoutes');
const inHistoryRoutes = require('./src/routes/inHistoryRoutes');
const outHistoryRoutes = require('./src/routes/outHistoryRoutes');
const customerRoutes = require('./src/routes/customerRoutes');

const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

// Routes for the user entity
app.use('/user', userRoutes);

// Routes for the auth entity
app.use(cookieParser());
app.use(session({ secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true }));
app.use('/auth', authRoutes);

// Routes for products
app.use('/products', productRoutes);

// Routes for stores
app.use('/stores', storeRoutes);

// Routes for transfers
app.use('/transfers', transferRoutes);

// Routes for the inHistories
app.use('/inHistories', inHistoryRoutes);

// Routes for the outHistories
app.use('/outHistories', outHistoryRoutes);

// Routes for the customers
app.use('/customers', customerRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const PORT = process.env.PORT || 5050;
app.listen(PORT ,() => {
  console.log('Server is running on port', PORT);
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;