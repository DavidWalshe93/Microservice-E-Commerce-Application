// Created by David Walshe on 22/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const Order = require("../src/model/order");

const {setupOrderTable} = require("./fixtures/db_setup");

beforeAll(() => {
    return setupOrderTable("order");
});

test("Should return a specified order based on the customerID", async () => {
    const response = await request(app)
        .get("/getOrders/1")
        .send()
        .expect(200);

    expect(response.body.length).toBe(3);

    response.body.forEach((order) => {
        expect(order.orderDetails.length).toBe(2)
    });
});

test("Should create a new Order", async () => {

    // Check if endpoint returns expected response.
    const response = await request(app)
        .post("/newOrder")
        .send({
            customerID: 1,
            saledate: "16-02-2020",
            orderDetails: [
                {
                    productID: 1,
                    name: "car1",
                    quantity: 100,
                    price: 2,
                    image: "fake.jpeg"
                },
                {
                    productID: 2,
                    name: "car2",
                    quantity: 200,
                    price: 20,
                    image: "fake2.jpeg"
                }
            ]
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

    order.orderDetails = JSON.parse(order.orderDetails);

    // Test the correct information was saved about the order.
    expect(order).toMatchObject({
        customerID: 1,
        saledate: "16-02-2020",
        orderDetails: [
            {
                productID: 1,
                name: "car1",
                quantity: 100,
                price: 2,
                image: "fake.jpeg"
            },
            {
                productID: 2,
                name: "car2",
                quantity: 200,
                price: 20,
                image: "fake2.jpeg"
            }
        ]
    });

});