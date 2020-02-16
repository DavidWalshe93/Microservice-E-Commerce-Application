// Created by David Walshe on 16/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const OrderDetails = require("../src/model/orderDetails");

const {setupDatabase} = require("./fixtures/db_setup");

beforeEach(setupDatabase);


test("Should return all orderDetails", async () => {
    const response = await request(app)
        .get("/getOrderDetails")
        .send()
        .expect(200);

    console.log(response)
});