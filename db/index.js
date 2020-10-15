const mysql = require('mysql');
const LOGIN = require('../config/db');

const db = mysql.createConnection(LOGIN);

db.connect();

db.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error){
    console.log(error);
  }
  console.log('The solution is: ', results[0].solution);
});

module.exports = db;
