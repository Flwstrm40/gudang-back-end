const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();

// Start MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log(err.message + ' --- ' + err.code);
        throw err;
    }
    console.log('=== Connected to MySQL database ===');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT ,() => {
  console.log('Server is running on port', process.env.PORT);
  console.log('http://localhost:5050');
});