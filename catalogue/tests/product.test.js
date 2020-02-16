// Created by David Walshe on 16/02/2020

// NPM imports
const request = require("supertest");
// Local imports
const app = require("../src/app");
const Product = require("../src/model/product");

const {setupDatabase} = require("./fixtures/db_setup");


beforeEach(setupDatabase);


test("Should return all products", async () => {
    // Check if endpoint returns expected response.
    await request(app)
        .get("/getProducts")
        .send()
        .expect(200);
});


test("Should return the 2nd product in the database", async () => {
    // Check if endpoint returns expected response.
    await request(app)
        .get("/getProduct/2")
        .send()
        .expect(200);
});


test("Should create a new Product", async () => {

    // Check if endpoint returns expected response.
    const response = await request(app)
        .post("/newProduct")
        .send({
            name: "myTestProduct",
            price: 1234.00,
            quantity: 40,
            image: "myTest.png"
        })
        .expect(201);

    // Retrieve the newly created product.
    const product = await Product.findOne({
        where: {
            productID: response.body.productID
        }
    });

    // Test the object exists in the database.
    expect(product).not.toBeNull();

    // Test the correct information was saved about the product.
    expect(product).toMatchObject({
        name: "myTestProduct",
        price: "1234.00",
        quantity: 40,
        image: "myTest.png"
    });
});