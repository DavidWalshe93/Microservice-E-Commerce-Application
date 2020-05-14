// Created by David Walshe on 22/02/2020

//NPM modules
const express = require("express");
const cors = require("cors");

// Import Routers for express
const Customer = require("./routers/customer");

// Create express instance
const app = express();

// Add Express middleware
app.use(express.json());    // Adds json "body" field to the "request" parameter via middleware.
app.use(cors());

// Add routers to express
app.use(Customer);

// Export for use by index.js and tests via jest
module.exports = app;
