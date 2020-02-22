// Created by David Walshe on 16/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const Customer = require("../../users service/src/model/customer");

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

});