// Created by David Walshe on 16/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const Order = require("../src/model/order");

const {setupDatabase} = require("./fixtures/db_setup");

beforeAll(() => {
    return setupDatabase("order")
});


test("Should return all orders", async () => {
    await request(app)
        .get("/getOrders")
        .send()
        .expect(200)
});


test("Should return a specified order based on its orderID", async () => {
    await request(app)
        .get("/getOrder/1")
        .send()
        .expect(200);
});

test("Should create a new Order", async () => {

    // Check if endpoint returns expected response.
    const response = await request(app)
        .post("/newOrder")
        .send({
            customerID: 100,
            saledate: "16-02-2020"
        })
        .expect(201);

    // Retrieve the newly created product
    const order = await Order.findOne({
        where: {
            orderID: response.body.orderID,
        }
    });

    // Test the object exists in the database
    expect(order).not.toBeNull();

    // Test the correct information was saved about the order.
    expect(order).toMatchObject({
        customerID: 100,
        saledate: "16-02-2020"
    });

});