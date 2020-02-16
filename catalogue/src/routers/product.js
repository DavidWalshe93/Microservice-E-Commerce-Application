// Created by David Walshe on 15/02/2020

// NPM Imports
const db = require("./../database/mySqlConnector");
const Product = require("./../model/product");
const express = require("express");

// Init express endpoint router
const router = new express.Router();


// Get all car items.
router.get(["/getProducts"], async (req, res) => {
    console.log("/getProducts called");
    try {
        // Use Sequelize Model to find all products
        const products = await Product.findAll({
            attributes: ["productID", "name", "quantity", "price", "image"]
        }).map(p => p.get({
            plain: true     // Remove outer metadata object and return only raw data results.
        }));

        console.log(products);
        return res.status(200).send(products)
    } catch (e) {
        res.status(500).send()
    }
});


// Get a specific car item by its ID.
router.get(["/getProduct/:id"], async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findOne({
            attributes: ["productID", "name", "quantity", "price", "image"],
            where: {
                productID: productId
            }
        });
        console.log(product);
        // Check if the client passed valid information for lookup.
        if (product === null) {
            return res.status(400).send({
                error: "A product does not match the ProductID used"
            })
        } else {
            console.log("Single Product Sent");
            return res.status(200).send(product)
        }

    } catch (e) {
        console.log(e);
        res.status(500).send()
    }
});


// Create a new car item.
router.post(["/newProduct"], async (req, res) => {

});

module.exports = router;
