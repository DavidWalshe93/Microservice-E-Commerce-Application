// Created by David Walshe on 16/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const Customer = require("../src/model/customer");

const {setupDatabase} = require("./fixtures/db_setup");

beforeAll(() => {
    setupDatabase("customer")
});


test("Should return all customers", async () => {
    await request(app)
        .get("/getCustomers")
        .send()
        .expect(200)
});


test("Should return a specified customer based on its customerID", async () => {
    await request(app)
        .get("/getCustomer/2")
        .send()
        .expect(200);
});

test("Should create a new Customer", async () => {

    // Check if endpoint returns expected response.
    const response = await request(app)
        .post("/newCustomer")
        .send({
            name: "John",
            password: "16-02-2020",
            address: "Hello World, Ireland"
        })
        .expect(201);

    // Retrieve the newly created product
    const customer = await Customer.findOne({
        where: {
            customerID: response.body.customerID,
        }
    });

    // Test the object exists in the database
    expect(customer).not.toBeNull();

    // Test the correct information was saved about the customer.
    expect(customer).toMatchObject({
        name: "John",
        password: "16-02-2020",
        address: "Hello World, Ireland"
    });

});