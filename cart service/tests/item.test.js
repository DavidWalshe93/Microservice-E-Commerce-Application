// Created by David Walshe on 20/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const Item = require("../src/model/item");

const setupItemsTable = require("./fixtures/db_setup");


beforeAll(() => {
    return setupItemsTable()
});


test("Should add a new item to the cart", async () => {
    const response = await request(app)
        .post("/add")
        .send({
            customerID: 2,
            productID: 4,
            name: "name" + 4,
            quantity: 4 * 10,
            price: 4 * 1.5,
            totalPrice: 10 * 4,
            image: "myTestImage.jpg"
        })
        .expect(201);
});



