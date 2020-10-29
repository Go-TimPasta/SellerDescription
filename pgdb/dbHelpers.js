const Promise = require('promise');
const db = require('./index.js');

const getSeller = (id) => new Promise((resolve, reject) => {
  db.query(`SELECT sellers.id,sellers.first_name,sellers.last_name,sellers.seller_image,stores.store_name,stores.sales,stores.year_started,stores.based_in,stores.store_image FROM sellers, stores WHERE sellers.id=${id} AND stores.id=sellers.store_id;`)
    .then((res) => resolve(res.rows[0]))
    .catch((e) => reject(e.stack));
});

const getSellerProducts = (id) => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM stores, products WHERE stores.id=products.store_id AND stores.id=${id} LIMIT 8`)
    .then((res) => resolve(res.rows[0]))
    .catch((e) => reject(e.stack));
});

module.exports = {
  getSeller,
  getSellerProducts,
};
