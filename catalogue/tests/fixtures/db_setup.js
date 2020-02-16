// Created by David Walshe on 16/02/2020

// Local module imports
const {sequelize} = require("../../src/database/sequelize");
const Product = require("../../src/model/product");
const Order = require("../../src/model/order");

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
// ORDER SETUP
// ==================================================================================

var mock_orders = [];
const mock_order_generator = (size = 3) => {
    mock_orders = [];
    for (let i = 1; i < size + 1; i++) {
        mock_orders.push({
            customerID: i,
            saledate: i + "-02-2020"
        });
    }

    return mock_orders;
};

const setupOrderTable = async () => {
    await Order.sync();
    await Order.destroy({
        truncate: true
    });
    const mocks = mock_order_generator();
    for (let i = 0; i < mocks.length; i++) {
        await Order.create(mocks[i]);
    }
};

// ==================================================================================
// Database SETUP
// ==================================================================================

const setupDatabase = async () => {
    await setupProductTable();
    await setupOrderTable();
};

module.exports = {setupDatabase, mock_products, mock_orders};



