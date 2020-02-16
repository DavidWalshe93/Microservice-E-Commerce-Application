// Created by David Walshe on 16/02/2020

// Local module imports
const {sequelize} = require("../../src/database/sequelize");
const Product = require("../../src/model/product");

var mock_products = [];

const mock_product_generator = (size = 3) => {
    mock_products = [];
    for (let i = 1; i < size + 1; i++) {
        mock_products.push({
            name: "test_product_" + i,
            quantity: i,
            price: 10 * i,
            image: "fake" + i + ".png"
        });
    }

    return mock_products;
};

const setupProductTable = async () => {
    await Product.sync();
    await Product.destroy({
        truncate: true
    });
    const mocks = mock_product_generator();
    for (let i = 0; i < mocks.length; i++) {
        await Product.create(mocks[i]);
    }
};

module.exports = {setupProductTable: setupProductTable, mock_products};



