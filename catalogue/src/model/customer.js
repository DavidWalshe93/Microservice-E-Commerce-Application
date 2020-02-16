// Created by David Walshe on 16/02/2020

// NPM imports
const {DataTypes} = require("sequelize");
// Local imports
const {sequelize, testConnection} = require("./../database/sequelize");

// Test connection to db.
testConnection("Customer Model");

// Define data model for Customer table.
const Customer = sequelize.define("customer", {
    customerID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(60)
    }
}, {
    timestamps: false
});

// Export Model
module.exports = Customer;