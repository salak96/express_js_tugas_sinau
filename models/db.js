require('dotenv').config();
const mysql = require('mysql2');

// Membuat koneksi ke database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err.message);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = db;
