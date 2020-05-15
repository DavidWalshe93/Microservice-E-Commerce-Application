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

INSERT IGNORE INTO products (productID, name, quantity, price, image) VALUES
     (1, 'Car 1', 30, 10.10, 'car1.jpeg'),
     (2, 'Car 2', 20, 50.80, 'car2.jpeg'),
    (3, 'Car 5', 15, 55.30, 'car3.jpeg'),
    (4, 'Car 6', 25, 100.50, 'car4.jpeg');
