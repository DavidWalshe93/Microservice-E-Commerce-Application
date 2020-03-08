// Created by David Walshe on 19/02/2020

// NPM imports
const express = require("express");
const Item = require("./routers/item");

// Create an express instance
const app = express();

// Include middleware
app.use(express.json());

// Add routers
app.use(Item);

// Export for use by index.js
module.exports = app;


