const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_DB_PASSWORD', // update with your database password, or leave empty
    database: 'YOUR_DB' // update this to reflect your database
});

module.exports = connection;
