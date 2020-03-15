// Created by David Walshe on 22/02/2020

// NPM imports
const {DataTypes} = require("sequelize");
// Local imports
const {sequelize, testConnection, syncDatabase} = require("./../database/sequelize");

// Test connection to db.
testConnection("Order Model");

// Define data model for Order table.
const Order = sequelize.define("order", {
    orderID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    customerID: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    saledate: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    orderDetails: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

syncDatabase();

module.exports = Order;