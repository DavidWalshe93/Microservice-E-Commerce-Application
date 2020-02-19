// Created by David Walshe on 19/02/2020

// NPM modules
const express = require("express");
const Item = require("./../model/item");

// Create a Express router
const router = express.Router();

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

router.delete("/cart/:custID/items/:id", (req, res, next) => {
    // Todo Remove an item from the cart database
});

router.get("/cart/:custId/items", (req, res, next) => {
    // Todo get the item list for the customer.
});

// Export router for external usage.
module.exports = router;