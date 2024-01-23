const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
const cors = require("cors");
const app = express();

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// // Set cache-control headers
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });


//import routes
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const storeRoutes = require('./src/routes/storeRoutes');
const transferRoutes = require('./src/routes/transferRoutes');
const inHistoryRoutes = require('./src/routes/inHistoryRoutes');
const outHistoryRoutes = require('./src/routes/outHistoryRoutes');
const customerRoutes = require('./src/routes/customerRoutes');
const mixRoutes = require('./src/routes/mixRoutes');

const dotenv = require('dotenv');

dotenv.config({ path: './.env' });





// app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Routes for the user entity
app.use('/user', userRoutes);

// Routes for the auth entity
app.use(cookieParser());

// const sessionStore = new MySQLStore({
//   host: process.env.DB_HOST,      
//   port: process.env.DB_PORT,       
//   user: process.env.DB_USER,      
//   password: process.env.DB_PASSWORD, 
//   database: process.env.DB_NAME,   
// });


app.use(session({
  secret: process.env.SECRET_KEY,   
  resave: true,
  saveUninitialized: true,
}));


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

// Routes for the mix
app.use('/mix', mixRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});



const PORT = process.env.PORT || 5050;
app.listen(PORT ,() => {
  console.log('Server is running on port', PORT);
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;