// Created by David Walshe on 16/02/2020

// Local module imports
const Product = require("../../src/model/product");

// ==================================================================================
// PRODUCT SETUP
// ==================================================================================
var mock_products = [];
const mock_product_generator = (size = 3) => {
    mock_products = [];
    for (let i = 1; i < size + 1; i++) {
        mock_products.push({
            name: "test_product_" + i,
            quantity: i,
            price: 10 * i,
            image: "fake" + i + ".png"
        });
    }

    return mock_products;
};

const setupProductTable = async () => {
    await Product.sync();
    await Product.destroy({
        truncate: true
    });
    const mocks = mock_product_generator();
    for (let i = 0; i < mocks.length; i++) {
        await Product.create(mocks[i]);
    }
};

// ==================================================================================
// Database SETUP
// ==================================================================================
const setupDatabase = async (testCase) => {
    switch (testCase) {
        // case "customer":
        //     await setupCustomerTable();
        //     break;
        // case "product":
        //     await setupProductTable();
        //     break;
        // case "order":
        //     await setupOrderTable();
        //     break;
        // case "orderDetails":
        //     console.log("IM HERE");
        //     await setupOrderDetailsTable();
        //     break;
    }
};

module.exports = {setupDatabase, mock_products};



