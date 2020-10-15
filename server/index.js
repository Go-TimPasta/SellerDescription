const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbHelper = require('../db/dbHelpers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get seller Info
app.get('/api/seller/:id', (req, res) => {
  dbHelper.getSeller(req.params.id, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).json(results);
  });
});

app.get('/api/store/:id', (req, res) => {
  dbHelper.getSellerProducts(req.params.id, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).json(results);
  });
});

app.delete('/api/store/:id', (req, res) => {
  dbHelper.deleteStore(req.params.id, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).json(results);
  });
});

app.put('/api/store/:id', (req, res) => {
  dbHelper.updateStore(req.params.id, req.body, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).json(results);
  })
});

app.post('/api/store', (req, res) => {
  dbHelper.createStore(req.body, (err, results) => {
    if (err) res.status(400).send(err);
    else res.status(200).json(results);
  })
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));

const PORT = 8004;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
