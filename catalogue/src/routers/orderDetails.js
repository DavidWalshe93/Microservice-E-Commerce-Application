// Created by David Walshe on 16/02/2020

// NPM Imports
const express = require("express");
// Local imports
const OrderDetails = require("./../model/orderDetails");

// Init express endpoint router
const router = new express.Router();


// Get all products items.
router.get("/getOrderDetails", async (req, res) => {

    try {
        // Use Sequelize Model to find all orderDetails
        const orderDetails = await OrderDetails.findAll()
            .map(od => od.get({
                plain: true     // Remove outer metadata object and return only raw data results.
            }));

        return res.status(200).send(orderDetails)
    } catch (e) {
        res.status(500).send(e)
    }
});


// Create a new orderDetail item
router.post("/newOrderDetails", async (req, res) => {
    try {
        const orderDetails = await OrderDetails.create(req.body);
        res.status(201).send(orderDetails);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;