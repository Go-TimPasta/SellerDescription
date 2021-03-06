const db = require('./index');

const getSeller = (id, callback) => {
  const queryStr = `SELECT
  sellers.id,
  sellers.first_name,
  sellers.last_name,
  sellers.seller_image,
  stores.store_name,
  stores.sales,
  stores.year_started,
  stores.based_in,
  stores.store_image
  FROM sellers, stores
  WHERE
  sellers.id=${id}
  AND
  stores.id=sellers.store_id;`;
  db.query(queryStr, (err, result) => {
    if (err) callback(err);
    else callback(null, result);
  });
};

const getSellerProducts = (id, callback) => {
  const queryStr = `SELECT * FROM stores, products WHERE stores.id=products.store_id AND stores.id=${id} LIMIT 8`;
  db.query(queryStr, (err, result) => {
    if (err) callback(err);
    else callback(null, result);
  });
};

const deleteStore = (id, callback) => {
  db.query(`Delete FROM products WHERE products.store_id=${id}`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      db.query(`Delete FROM sellers WHERE sellers.store_id=${id}`, (err, results) => {
        if (err) {
          callback(err);
        } else {
          db.query(`Delete FROM stores WHERE stores.id=${id}`, (err, results) => {
            if (err) {
              callback(err);
            } else {
              callback(null, results);
            }
          })
        }
      })
    }
  })
};

const updateStore = (id, data, callback) => {
  db.query(`UPDATE stores SET store_name = '${data.store_name}' WHERE id = ${id}`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
};


const createStore = (data, callback) => {
  db.query(`INSERT INTO stores (store_name, sales, year_started, based_in, store_image) VALUES ('${data.store_name}', '${data.sales}', '${data.year_started}', '${data.based_in}', '${data.store_image}')`, (err,results) => {
  if (err) {
    callback(err);
  } else {
    callback(null, results);
  }
})
};

module.exports = {
  getSeller,
  getSellerProducts,
  deleteStore,
  updateStore,
  createStore,
};


