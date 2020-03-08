// Created by David Walshe on 22/02/2020

const Customer = require("../../src/model/customer");

// ==================================================================================
// ITEM SETUP
// ==================================================================================
const mock_customer_generator = (size = 3) => {
    let mock_customer_details = [];
    for (let i = 1; i < size + 1; i++) {
        mock_customer_details.push({
            fname: "John",
            lname: "Murphy",
            username: "testme",
            email: `jm${i}@example.com`,
            password: "myPass123",
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

let customers = [];
const setupCustomerTable = async () => {
    await Customer.sync();
    await Customer.destroy({
        truncate: true
    });
    customers = mock_customer_generator();
    for (let i = 0; i < mocks.length; i++) {
        await Customer.create(mocks[i])
    }
};

module.exports = {setupCustomerTable, customers};