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

INSERT INTO products (name, quantity, price, image) VALUES
     ('Car 1', 30, 10.10, 'car1.jpeg'),
     ('Car 2', 20, 50.80, 'car2.jpeg'),
    ('Car 5', 15, 55.30, 'car3.jpeg'),
    ('Car 6', 25, 100.50, 'car4.jpeg');
);

