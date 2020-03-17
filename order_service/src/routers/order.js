// Created by David Walshe on 22/02/2020

// NPM Imports
const express = require("express");
// Local imports
const Order = require("./../model/order");

// Init express endpoint router
const router = new express.Router();

// Get all order items
router.get(["/getOrders/:id"], async (req, res) => {
    console.log("/getOrders");
    const customerID = req.params.id;
    try {
        const orders = await Order.findAll({
            where: {
                customerID
            }
        }).map(o => o.get({
            plain: true
        }));

        // Extract JSON to Object.
        orders.map((order) => {
            order.orderDetails = JSON.parse(order.orderDetails);
        });

        return res.status(200).send(orders)
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
});

router.post(["/newOrder"], async (req, res) => {
    console.log("/newOrder", req.body);
    try {
        req.body.orderDetails = JSON.stringify(req.body.orderDetails);
        const order = await Order.create(req.body);
        res.status(201).send(order);
    } catch (e) {
        console.log(e);
        res.status(400).send()
    }
});

// Export router
module.exports = router;