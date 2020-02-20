// Created by David Walshe on 20/02/2020

const Item = require("../../src/model/item");

// ==================================================================================
// ITEM SETUP
// ==================================================================================
const mock_item_generator = (size = 3) => {
    let mock_items = [];
    for (let i = 1; i < size + 1; i++) {
        mock_items.push({
            itemID: i,
            customerID: i,
            productID: i,
            name: "name" + i,
            quantity: i * 10,
            price: i * 1.5,
            totalPrice: 30 * i,
            image: "myTestImage.jpg"
        });
    }
    return mock_items;
};

const setupItemsTable = async () => {
    await Item.sync();
    await Item.destroy({
        truncate: true
    });
    const mocks = mock_item_generator();
    for (let i = 0; i < mocks.length; i++) {
        await Item.create(mocks[i])
    }
};

module.exports = setupItemsTable;