// Created by David Walshe on 15/02/2020

// NPM Imports
const db = require("./../database/mySqlConnector");
const express = require("express");

// Init express endpoint router
const router = new express.Router();

// Get car items
router.get(["/getProducts"], (req, res) => {
    console.log("/getProducts called");
    const SQL_QUERY = "SELECT * FROM products";
});

module.exports = router;
