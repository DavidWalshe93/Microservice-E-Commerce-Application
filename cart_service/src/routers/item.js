// Created by David Walshe on 19/02/2020

// NPM modules
const express = require("express");
// Local imports
const Item = require("./../model/item");

// Create a Express router
const router = express.Router();


// Adds an item to the database, or if it exists already, updates it.
router.post("/add", async (req, res) => {
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
            existingItem.totalPrice = existingItem.price * existingItem.quantity;

            // Commit the row updates.
            await Item.update({
                quantity: existingItem.quantity,
                totalPrice: existingItem.price * existingItem.quantity
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

    // Try and delete the row specified in the request
    try {
        await Item.destroy({
            where: {
                customerID,
                productID
            }
        });

        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send()
    }
});


// Returns all items for a designated customer.
router.get("/cart/:custId/items", async (req, res) => {
    const customerID = req.params.custId;

    try {
        // Find all the items with the corresponding customerID
        const customerItems = await Item.findAll({
            where: {
                customerID
            }
        }).map(o => o.get({
            plain: true
        }));

        return res.status(200).send(customerItems);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Export router for external usage.
module.exports = router;