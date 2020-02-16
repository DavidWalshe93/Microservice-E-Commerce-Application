// Created by David Walshe on 16/02/2020

// NPM imports
const {DataTypes} = require("sequelize");
// Local imports
const {sequelize, testConnection} = require("./../database/sequelize");

// Test connection to db.
testConnection("OrderDetails Model");

// Define data model for OrderDetails table.
const OrderDetails = sequelize.define("orderDetails", {
    orderDetailsID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    orderID: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    productID: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
});

// Export Model
module.exports = OrderDetails;