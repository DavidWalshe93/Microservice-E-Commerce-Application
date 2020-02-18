DROP DATABASE IF EXISTS shop;
CREATE DATABASE IF NOT EXISTS shop;
use shop;
CREATE TABLE IF NOT EXISTS products (
         productID    INT UNSIGNED  NOT NULL AUTO_INCREMENT,
         name         VARCHAR(30)   NOT NULL DEFAULT '',
         quantity     INT UNSIGNED  NOT NULL DEFAULT 0,
         price        DECIMAL(7,2)  NOT NULL DEFAULT -1,
         image        VARCHAR(30)   NOT NULL DEFAULT '',
         PRIMARY KEY  (productID)
       );
INSERT INTO products (name, quantity, price, image)
VALUES
     ('Car 1', 30, 10.10, 'car1.jpeg'),
     ('Car 2', 20, 50.80, 'car2.jpeg'),
    ('Car 5', 15, 55.30, 'car3.jpeg'),
    ('Car 6', 25, 100.50, 'car4.jpeg');

CREATE TABLE Customer (
    customerID    INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    fname VARCHAR(40) NOT NULL,
    lname VARCHAR(40) NOT NULL,
    username VARCHAR(40) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(40) NOT NULL,
    phone VARCHAR(40) NOT NULL,
    zipcode VARCHAR(40),
    streetname VARCHAR(40) NOT NULL,
    city VARCHAR(40) NOT NULL,
    county VARCHAR(40) NOT NULL,
    country VARCHAR(40) NOT NULL,
    PRIMARY KEY  (customerID)
   
);
INSERT INTO Customer (fname, lname, username, email, password, phone, zipcode, streetname, city, county, country) VALUES
         ('joe', 'murphy', 'jmurph', 'jmurphy@example.com', "mypass1", "0871234567", "A00A000", "street", "city", "county", "country"),
         ('mary', 'flynn', 'mflynn', 'mflynn@example.com', "mypass2", "0877654321", "B00B000", "street", "city", "county", "country");

CREATE TABLE Orders (
    orderID INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    customerID INT UNSIGNED  NOT NULL,
    saledate VARCHAR(40) NOT NULL,
    PRIMARY KEY  (orderID)

);

CREATE TABLE OrderDetails (
    orderdetailsID INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    orderID INT UNSIGNED  NOT NULL,
    productID INT UNSIGNED  NOT NULL,
    quantity INT UNSIGNED  NOT NULL,
    PRIMARY KEY  (orderdetailsID)

);

