const mysql = require('mysql');
const keys = require('./config.js');

let connection = mysql.createConnection({
    host: keys.host,
    user: keys.user,
    password: keys.password, // YOUR_DB_PASSWORD update with your database password
    database: keys.database // YOUR_DB update this to reflect your database
});

module.exports = connection;
