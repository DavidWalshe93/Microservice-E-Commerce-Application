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

// Export router
module.exports = Order;