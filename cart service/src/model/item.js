// Created by David Walshe on 19/02/2020

// NPM imports
const {DataTypes} = require("sequelize");
// Local imports
const {sequelize, testConnection, syncDatabase} = require("./../database/sequelize");

// Test connection to db
testConnection("Cart Model");

// Define data model for Cart table
const Item = sequelize.define("cart", {
    itemID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customerID: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    productID: {
        type: DataTypes.BIGINT,
        allowNull: false
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
    totalPrice: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false,
        defaultValue: 0
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    }
}, {
    timestamps: false
});

// Synchronise Database with sequelize model.
syncDatabase();

// Export Model
module.exports = Item;