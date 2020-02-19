// Created by David Walshe on 15/02/2020

// NPM Imports
const express = require("express");
// Local imports
const Product = require("./../model/product");

// Init express endpoint router
const router = new express.Router();


// Get all product items.
router.get(["/getProducts"], async (req, res) => {
    console.log("/getProducts called");
    try {
        // Use Sequelize Model to find all products
        const products = await Product.findAll()
            .map(p => p.get({
                plain: true     // Remove outer metadata object and return only raw data results.
            }));

        return res.status(200).send(products)
    } catch (e) {
        res.status(500).send()
    }
});


// Get a specific product item by its ID.
router.get(["/getProduct/:id"], async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findOne({
            where: {
                productID: productId
            }
        });

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


// Create a new product item.
router.post(["/newProduct"], async (req, res) => {
    try {
        console.log(req);
        const product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
