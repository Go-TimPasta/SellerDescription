const { Client } = require('pg');
const LOGIN = require('./configPG.example.js');

const client = new Client(LOGIN);

client.connect()
  .then(() => console.log('Connected successfully'))
  .catch((error) => console.log(error));

module.exports = client;
