// Created by David Walshe on 16/02/2020

const request = require("supertest");
const app = require("../../src/app");
const Product = require("../../src/model/product");

const {setupProductTable, mock_products} = require("./../fixtures/db_setup");


beforeEach(setupProductTable);


test("Should return all products", async () => {
    await request(app)
        .get("/getProducts")
        .send()
        .expect(200);
});


test("Should return the 2nd product in the database", async () => {
    await request(app)
        .get("/getProduct/2")
        .send()
        .expect(200);
});