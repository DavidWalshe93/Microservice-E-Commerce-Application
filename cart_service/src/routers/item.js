// Created by David Walshe on 19/02/2020

// NPM modules
const express = require("express");
// Local imports
const Item = require("./../model/item");

// Create a Express router
const router = express.Router();

const logger = (method, endpoint) => {
    console.log(`${new Date().toLocaleString()} - Cart - ${method.toUpperCase()} - ${endpoint}`)
};

// Adds an item to the database, or if it exists already, updates it.
router.post("/add", async (req, res) => {
    logger("POST", "/add");
    const item = req.body;
    try {
        // Check if the item exists in the database already
        const existingItem = await Item.findOne({
            where: {
                productID: item.productID,
                customerID: item.customerID
            }
        });

        // If no existing items match, add the new item to the cart
        if (!existingItem) {
            const newItem = await Item.create(item);

            return res.status(201).send(newItem);
        } else {
            // Else get the matching row and update it.
            existingItem.quantity += item.quantity;

            // Commit the row updates.
            await Item.update({
                quantity: existingItem.quantity,
            }, {
                where: {itemID: existingItem.itemID}
            });

            return res.status(202).send(existingItem)
        }
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});


// Deletes a specified item from the cart.
router.delete("/cart/:custId/items/:id", async (req, res) => {
    // Get request parameters
    const customerID = req.params.custId;
    const productID = req.params.id;
    logger("DELETE", `/cart/${customerID}/items/${productID}`);
    // Try and delete the row specified in the request
    try {
        await Item.destroy({
            where: {
                customerID,
                productID
            }
        });

        res.status(200).send({productID});
    } catch (e) {
        console.log(e);
        res.status(400).send()
    }
});


// Deletes all items from the cart for a specific user.
router.delete("/cart/:custId/items", async (req, res) => {
    // Get request parameters
    const customerID = req.params.custId;
    logger("DELETE", `/cart/${customerID}/items`);
    // Try and delete the row specified in the request
    try {
        await Item.destroy({
            where: {
                customerID
            }
        });

        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send()
    }
});


// Helper method for retrieving all items for a specific customer from the database.
const getAllItems = async (customerID) => {
    return await Item.findAll({
        where: {
            customerID
        }
    }).map(o => o.get({
        plain: true
    }));
};


// Returns all items for a designated customer.
router.get("/cart/:custId/items", async (req, res) => {
    const customerID = req.params.custId;
    logger("GET", `/cart/${customerID}/items`);
    try {
        // Find all the items with the corresponding customerID
        const customerItems = await getAllItems(customerID);

        return res.status(200).send(customerItems);
    } catch (e) {
        res.status(500).send(e);
    }
});


// Adds numerous items to the database in one transaction.
router.post("/bulkAdd", async (req, res) => {
    logger("POST", `/bulkAdd`);
    // Deconstruct request body
    const {customerID, items} = {...req.body};

    // Get the keys of the items objects for iteration.
    const keys = Object.keys(items);

    // Update the database for each item.
    for (let i = 0; i < keys.length; i++) {
        // Get current iteration key
        const key = keys[i];

        try {
            // Check if the item exists in the database already
            const existingItem = await Item.findOne({
                where: {
                    productID: items[key].productID,
                    customerID: items[key].customerID
                }
            });
            if (!existingItem) {
                // Create a new item if it does not already exist.
                await Item.create(items[key]);
            } else {
                // Else get the matching row and update it.
                existingItem.quantity += items[key].quantity;

                // Commit the row updates.
                await Item.update({
                    quantity: existingItem.quantity,
                }, {
                    where: {itemID: existingItem.itemID}
                });
            }
        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    }

    res.status(200).send(await getAllItems(customerID))
});

// Export router for external usage.
module.exports = router;