const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// Buat koneksi MySQL dari URL
const db = mysql.createConnection('mysql://root:cBF3c-c3fgE4BcEDBFf55ah3Gc5bGbcE@viaduct.proxy.rlwy.net:42879/railway');

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        throw err;
    }
    console.log('=== Connected to MySQL database ===');
});

module.exports = db;
