// Created by David Walshe on 19/02/2020

// NPM imports
const express = require("express");
const Cart = require("./routers/cart");

// Create an express instance
const app = express();

// Include middleware
app.use(express.json());

// Add routers
app.use(Cart);

// Export for use by index.js
module.exports = app;


