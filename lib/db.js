const mysql = require('mysql');

const cred = require('./dbcredentials.json');

const connection = mysql.createConnection({
  host: cred.host,
  user: cred.user,
  database: cred.database,
  password: cred.password,
});

connection.connect();
module.exports = connection;