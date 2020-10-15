# Etsy-SellerDescription

## How to populate the database
1. If you haven't yet, run `npm install` in the terminal in the root directory.
2. Go to the config directory and fill in your login info for mysql. Then change the file name from `db.example.js` to `db.js`
3. Next, go to the db directory and run `mysql -u 'FILL IN USERNAME' -p 'FILL IN PASSWORD' < schema.sql`
4. Finally in the same directory you can run `node seed.js` or go back to the root directory and type `npm run seed`.

## Starting the Server
1. In the root directory, type `npm run start`


## CRUD routes
GET A SELLER & PRODUCTS:
  Get('/api/seller/:id')

GET A STORE WITH SELLER AND PRODUCTS:
  Get('/api/store/:id')

DELETE A STORE WITH SELLER AND PRODUCTS:
  Delete('/api/store/:id')

UPDATE A STORE NAME:
  Put('/api/store/:id) with body ex:
  "${store_name}" : "Pizza Hut"

POST A STORE:
  Post('api/store) with body example:
  {
    "store_name": "Tracys",
    "sales": 25,
    "year_started": 1995,
    "based_in": "Vietnam",
    "store_image": "none"
}
