// Created by David Walshe on 16/02/2020

// Local module imports
const {sequelize} = require("../../src/database/sequelize");
const Product = require("../../src/model/product");
const Order = require("../../src/model/order");
const OrderDetails = require("../../src/model/orderDetails");
const Customer = require("../../src/model/customer");

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
// ORDER DETAILS SETUP
// ==================================================================================
var mock_order_details = [];
const mock_order_details_generator = (size = 3) => {
    mock_order_details = [];
    for (let i = 1; i < size + 1; i++) {
        mock_order_details.push({
            orderID: i,
            productID: i,
            quantity: i
        });
    }

    return mock_order_details;
};

const setupOrderDetailsTable = async () => {
    await OrderDetails.sync();
    await OrderDetails.destroy({
        truncate: true
    });
    const mocks = mock_order_details_generator();
    for (let i = 0; i < mocks.length; i++) {
        await OrderDetails.create(mocks[i]);
    }
};

// ==================================================================================
// CUSTOMER SETUP
// ==================================================================================

var mock_customer_details = [];
const mock_customer_generator = (size = 3) => {
    mock_customer_details = [];
    for (let i = 1; i < size + 1; i++) {
        mock_customer_details.push({
            fname: "John",
            lname: "Murphy",
            username: "testme",
            email: "jm@example.com",
            password: "16-02-2020",
            phone: "0121234567",
            zipcode: "A00A000",
            streetname: "testStreet",
            city: "testCity",
            county: "testCounty",
            country: "testCountry"
        });
    }

    return mock_customer_details;
};

const setupCustomerTable = async () => {
    await Customer.sync();
    await Customer.destroy({
        truncate: true
    });
    const mocks = mock_customer_generator();
    for (let i = 0; i < mocks.length; i++) {
        await Customer.create(mocks[i]);
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

module.exports = {setupDatabase, mock_products, mock_orders};



