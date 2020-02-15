// Created by David Walshe on 15/02/2020

// NPM Imports
const db = require("./../database/mySqlConnector");
const express = require("express");

// Init express endpoint router
const router = new express.Router();


// Get all car items
router.get(["/getProducts"], async (req, res) => {
    console.log("/getProducts called");
    const query = "SELECT * FROM products";

    await db.query(query, [], (err, rows) => {
        if (err) {
            // Error with database or query, return 500 to the client.
            console.error(err);
            res.status(500).send()
        } else {
            // Send back the database content to the client
            res.status(200).send(JSON.stringify(rows));
            console.log("Products sent");
        }
    })
});


// Get a specific car item
router.get(["/getProduct/:id"], async (req, res) => {
    const productId = req.params.id;
    const query = "SELECT * FROM products where productID=" + productId;

    await db.query(query, [], (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send()
        } else {
            res.status(200).send(JSON.stringify(rows));
            console.log("Single Product Sent")
        }
    })
});

module.exports = router;
