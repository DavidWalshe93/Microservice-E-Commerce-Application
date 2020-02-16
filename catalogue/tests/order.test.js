// Created by David Walshe on 16/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const Order = require("../src/model/order");

const {setupDatabase} = require("./fixtures/db_setup");

beforeEach(setupDatabase);

test("Should return all orders", async () => {
    await request(app)
        .get("/getOrders")
        .send()
        .expect(200)
});

test("Should return a specified order based on its orderID", async () => {
    await request(app)
        .get("/getOrder/2")
        .send()
        .expect(200)
});