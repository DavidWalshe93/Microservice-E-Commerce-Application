// Created by David Walshe on 22/02/2020

//NPM modules
const express = require("express");

// Import Routers for express
const Order = require("./routers/order");

// Create express instance
const app = express();

// Adds json "body" field to the "request" parameter via middleware.
app.use(express.json());

// Add routers to express
app.use(Order);

// Export for use by index.js and tests via jest
module.exports = app;