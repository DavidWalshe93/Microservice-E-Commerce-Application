// Created by David Walshe on 16/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const Customer = require("../src/model/customer");

const setupCustomerTable = require("./fixtures/db_setup");


beforeAll(() => {
    return setupCustomerTable("customer")
});


test("Should log a user in", async () => {
    await request(app)
        .post("/login")
        .send({
            email: "jm1@example.com",
            password: "myPass123"
        })
        .expect(200);
});


test("Should create a new Customer", async () => {

    // Check if endpoint returns expected response.
    const response = await request(app)
        .post("/register")
        .send({
            fname: "John",
            lname: "Murphy",
            username: "testme",
            email: "jm@example.com",
            password: "myPass",
            phone: "0121234567",
            zipcode: "A00A000",
            streetname: "testStreet",
            city: "testCity",
            county: "testCounty",
            country: "testCountry"
        })
        .expect(201);

    // Retrieve the newly created product
    const customer = await Customer.findOne({
        where: {
            customerID: response.body.customer.customerID,
        }
    });

    // Test the object exists in the database
    expect(customer).not.toBeNull();

    // Test the correct information was saved about the customer.
    expect(response.body).toMatchObject({
        customer: {
            fname: "John",
            lname: "Murphy",
            username: "testme",
            email: "jm@example.com",
            phone: "0121234567",
            zipcode: "A00A000",
            streetname: "testStreet",
            city: "testCity",
            county: "testCounty",
            country: "testCountry"
        },
        token: JSON.parse(customer.tokens)[0]
    });

    // Verify password was hashed
    expect(customer.password).not.toBe("MyPass")
});