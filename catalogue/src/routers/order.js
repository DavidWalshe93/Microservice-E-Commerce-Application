// Created by David Walshe on 16/02/2020

// NPM Imports
const express = require("express");
// Local imports
const Order = require("./../model/order");

// Init express endpoint router
const router = new express.Router();

// Get all order items
router.get(["/getOrders"], async (req, res) => {
    try {
        const orders = await Order.findAll()
            .map(o => o.get({
                plain: true
            }));

        return res.status(200).send(orders)
    } catch (e) {
        res.status(500).send(e)
    }
});

// Get a single order based on ID.
router.get(["/getOrder/:id"], async (req, res) => {
    // Get the id requested by the user in the request
    const orderID = req.params.id;

    try {
        // Look for the order in the db.
        const order = await Order.findOne({
            where: {
                orderID
            }
        });

        // If the order does not exist return 400
        if (order === null) {
            return res.status(400).send()
        }

        // Return requested ID if all went well.
        return res.status(200).send(order)
    } catch (e) {
        // Return 500 and error if something went wrong on the server side.
        return res.status(500).send(e)
    }
});

router.post(["/newOrder"], async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).send(order);
    } catch (e) {
        res.status(400).send()
    }
});

// Export router
module.exports = router;