// Created by David Walshe on 19/02/2020

// NPM modules
const express = require("express");
const Item = require("./../model/item");

// Create a Express router
const router = express.Router();

router.post("/add", (req, res) => {
    // TODO Add new data to in memory database here.
});

router.delete("/cart/:custID/items/:id", (req, res, next) => {
    // Todo Remove an item from the cart database
});

router.get("/cart/:custId/items", (req, res, next) => {
    // Todo get the item list for the customer.
});

// Export router for external usage.
module.exports = router;