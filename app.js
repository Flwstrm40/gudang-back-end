const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require("cors");

//import routes
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');

const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'  ],
  credentials: true,
}));

// Routes for the user entity
app.use('/user', userRoutes);

// Routes for the auth entity
app.use(cookieParser());
app.use(session({ secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true }));
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const PORT = process.env.PORT || 5055;
app.listen(PORT ,() => {
  console.log('Server is running on port', PORT);
  console.log(`http://localhost:${PORT}`);
});