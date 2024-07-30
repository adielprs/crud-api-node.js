// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'testdb'
});

if(!connection)
{
  console.log('Koneksi Gagal');
}

module.exports = connection;
