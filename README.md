# Etsy-SellerDescription

## How to populate the database
1. If you haven't yet, run `npm install` in the terminal in the root directory.
2. Go to the config directory and fill in your login info for postgressql. Then change the file name from `pgdb.example.js` to `pgdb.js`
3. Next, run `node reseed.js` in root directory


## Starting the Server
1. In the root directory, type `npm run start`
2. Copy paste CSV file instructions.


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

-----------------------------------------------------
TO CREATE CSV FILE, IN ROOT DIRECTORY, WRITE IN TERMINAL: node reseed.js
-you will receive 3 files


HOW TO IMPORT CSV INTO MONGODB:

1.) To start mongo on terminal command line, type: mongodb

2.) Navigate to the directory where your CSV file is

3.) Use the mongoimport command where "tests" is your database name, "products" is your table/collection name, and "products.csv" is your csv file name
    mongoimport --type csv -d test -c products --headerline --drop products.csv;
    mongoimport --type csv -d test -c sellers --headerline --drop sellers.csv;
    mongoimport --type csv -d test -c stores --headerline --drop stores.csv;

4.) Verify the Import Worked
  In command line, write: mongo

5.) Then in mongo, on command line write: >use test
  where "test" is your database name

6.) To query all items in a specific collection, use >db.products.find()
where "products" is your collection name.


