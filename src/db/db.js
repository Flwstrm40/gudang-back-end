const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// Buat koneksi MySQL dari URL
const db = mysql.createConnection(process.env.MYSQL_URL);

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        throw err;
    }
    console.log('=== Connected to MySQL database ===');
});

module.exports = db;
