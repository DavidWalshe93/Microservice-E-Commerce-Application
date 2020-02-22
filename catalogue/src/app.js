// Created by David Walshe on 16/02/2020

//NPM modules
const express = require("express");
const cors = require("cors");

// Import Routers for express
const Product = require("./routers/product");
const Order = require("./routers/order");
const OrderDetails = require("./routers/orderDetails");
const Customer = require("./routers/customer");

// Create express instance
const app = express();

// Adds json "body" field to the "request" parameter via middleware.
app.use(express.json());
app.use(cors());

// Add routers to express
app.use(Product);
app.use(Order);
app.use(OrderDetails);
app.use(Customer);

// Export for use by index.js
module.exports = app;
