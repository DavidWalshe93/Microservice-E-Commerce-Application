// Created by David Walshe on 22/02/2020

// NPM Imports
const express = require("express");
// Local imports
const Customer = require("../model/customer");
const auth = require("../middleware/auth");

// Init express endpoint router
const router = new express.Router();

const logger = (method, endpoint) => {
    console.log(`${new Date().toLocaleString()} - Cart - ${method.toUpperCase()} - ${endpoint}`)
};

// Get all customer items
router.get(["/getCustomers"], async (req, res) => {
    logger("GET", "/getCustomers");
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

// Logout the current session.
router.post(["/logout"], auth, async (req, res) => {
    logger("POST", "/logout");
    try {
        // Remove the current session token.
        req.customer.tokens = JSON.stringify(JSON.parse(req.customer.tokens).filter((token) => {
            return token !== req.token;
        }));

        // Save token removal.
        await req.customer.save();

        return res.status(200).send({});
    } catch (e) {
        res.status(500).send()
    }
});

// Login a previously registered user.
router.post(["/login"], async (req, res) => {
    logger("POST", "/login");
    // Get the id requested by the user in the request
    try {
        // Look for the customer in the db.
        const customer = await Customer.findByCredentials(req.body.email, req.body.password);

        // If the customer does not exist return 400
        if (customer === null) {
            return res.status(400).send({
                error: "DOES_NOT_EXIST"
            })
        }

        // Return requested ID if all went well.
        const token = await customer.generateAuthToken();
        return res.status(200).send({customer, token})
    } catch (e) {
        // Return 500 and error if something went wrong on the server side.
        return res.status(500).send({
            error: "DOES_NOT_EXIST"
        })
    }
});

// Adds a new customer to the database.
router.post(["/register"], async (req, res) => {
    logger("POST", "/register");
    try {
        const customer = await Customer.create(req.body);
        const token = await customer.generateAuthToken();

        return res.status(201).send({customer, token});
    } catch (e) {
        console.log(e);
        if (e.name === "SequelizeUniqueConstraintError") {
            return res.status(400).send({
                error: "EMAIL_IN_USE"
            })
        }
        res.status(400).send(e)
    }
});

// Export router
module.exports = router;