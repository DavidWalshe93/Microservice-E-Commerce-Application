// Created by David Walshe on 16/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const OrderDetails = require("../src/model/orderDetails");

const {setupDatabase} = require("./fixtures/db_setup");

beforeAll(() => {
    return setupDatabase("orderDetails")
});


test("Should return all orderDetails", async () => {
    const response = await request(app)
        .get("/getOrderDetails")
        .send()
        .expect(200);
});


test("Should create a new OrderDetails item", async () => {

    // Check if endpoint returns expected response.
    const response = await request(app)
        .post("/newOrderDetails")
        .send({
            orderID: 10,
            productID: 100,
            quantity: 1000
        })
        .expect(201);

    // Retrieve the newly created product.
    const orderDetail = await OrderDetails.findOne({
        where: {
            orderdetailsID: response.body.orderDetailsID
        }
    });

    // Test the object exists in the database.
    expect(orderDetail).not.toBeNull();

    // Test the correct information was saved about the product
    expect(orderDetail).toMatchObject({
        orderID: 10,
        productID: 100,
        quantity: 1000
    })
});