DROP DATABASE IF EXISTS etsySeller;

CREATE DATABASE etsySeller;

USE etsySeller;

CREATE TABLE sellers (
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name varchar(99) NOT NULL,
  last_name varchar(99) NOT NULL,
  seller_image varchar(255),
  store_id int
);

CREATE TABLE stores (
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  store_name varchar(255) NOT NULL,
  sales int,
  year_started int(4),
  based_in varchar(100),
  store_image varchar(255)
);

CREATE TABLE products (
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  product_name varchar(255) NOT NULL,
  product_price decimal(5, 2) NOT NULL,
  is_free_shipping tinyint(1) NOT NULL,
  product_image varchar(255) NOT NULL,
  store_id int NOT NULL
);
/* POSTGRESSQL

CREATE TABLE sellers (
  id SERIAL,
  first_name varchar(99),
  last_name varchar(99),
  seller_image varchar(255),
  store_id int,
  PRIMARY KEY (id)
  );

CREATE TABLE stores (
  id SERIAL,
  store_name varchar(255),
  sales int,
  year_started int,
  based_in varchar(100),
  store_image varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE products (
  id SERIAL,
  product_name varchar(255),
  product_price decimal(5, 2),
  is_free_shipping int,
  product_image varchar(255),
  store_id int,
  PRIMARY KEY (id)
);


*/

/*
COPY sellers(id,first_name,last_name,seller_image,store_id)
FROM '/Users/eno/Desktop/SDC/Etsy-SellerDescription/sellers.csv'
DELIMITER ','
CSV HEADER;


COPY stores(id,store_name,sales,year_started,based_in,store_image)
FROM '/Users/eno/Desktop/SDC/Etsy-SellerDescription/stores.csv'
DELIMITER ','
CSV HEADER;

COPY products(id,product_name,product_price,is_free_shipping,product_image,store_id)
FROM '/Users/eno/Desktop/SDC/Etsy-SellerDescription/products.csv'
DELIMITER ','
CSV HEADER;

\copy sellers(id,first_name,last_name,seller_image,store_id) FROM '/home/ec2-user/SellerDescription/sellers.csv' DELIMITER ',' CSV HEADER;


\copy products(id,product_name,product_price,is_free_shipping,product_image,store_id) FROM '/home/ec2-user/SellerDescription/products.csv' DELIMITER ',' CSV HEADER;


\copy stores(id,store_name,sales,year_started,based_in,store_image) FROM '/home/ec2-user/SellerDescription/stores.csv' DELIMITER ',' CSV HEADER;



*/