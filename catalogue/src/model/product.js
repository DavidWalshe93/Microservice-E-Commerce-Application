// Created by David Walshe on 15/02/2020

// NPM imports
const {DataTypes} = require("sequelize");
// Local imports
const {sequelize, testConnection} = require("./../database/sequelize");

testConnection("Product Model");

const Product = sequelize.define("product", {
    productID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: ""
    },
    quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    price: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false,
        defaultValue: 99999.99
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    }
}, {
    timestamps: false,
});

module.exports = Product;