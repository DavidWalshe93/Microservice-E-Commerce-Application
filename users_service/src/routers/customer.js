// Created by David Walshe on 22/02/2020

// NPM Imports
const express = require("express");
// Local imports
const Customer = require("../model/customer");

// Init express endpoint router
const router = new express.Router();

// Get all customer items
router.get(["/getCustomers"], async (req, res) => {
    try {
        const customers = await Customer.findAll()
            .map(o => o.get({
                plain: true
            }));

        return res.status(200).send(customers)
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
});

// Get a single customer based on ID.
router.get(["/getCustomer/:id"], async (req, res) => {
    // Get the id requested by the user in the request
    const customerID = req.params.id;

    try {
        // Look for the customer in the db.
        const customer = await Customer.findOne({
            where: {
                customerID
            }
        });

        // If the customer does not exist return 400
        if (customer === null) {
            return res.status(400).send()
        }

        // Return requested ID if all went well.
        return res.status(200).send(customer)
    } catch (e) {
        // Return 500 and error if something went wrong on the server side.
        return res.status(500).send(e)
    }
});

// Adds a new customer to the database.
router.post(["/newCustomer"], async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).send(customer);
    } catch (e) {
        res.status(400).send()
    }
});

// Export router
module.exports = router;