// Created by David Walshe on 20/02/2020

const Item = require("../../src/model/item");

// ==================================================================================
// ITEM SETUP
// ==================================================================================
const mock_item_generator = (size = 3) => {
    let mock_items = [];
    for (let i = 1; i < size + 1; i++) {
        mock_items.push({
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
    for (let i = 0; i < 10; i++) {
        await Item.create(mocks[0])
    }
};

const items = [
    {
        customerID: 2,
        productID: 1,
        name: "name" + 1,
        quantity: 4,
        price: 10.00,
        image: "myTestImage1.jpg"
    },
    {
        customerID: 2,
        productID: 4,
        name: "name" + 4,
        quantity: 10,
        price: 4.00,
        image: "myTestImage2.jpg"
    },
    {
        customerID: 2,
        productID: 2,
        name: "name" + 2,
        quantity: 2,
        price: 2.00,
        image: "myTestImage3.jpg"
    }
];

module.exports = {setupItemsTable, items};