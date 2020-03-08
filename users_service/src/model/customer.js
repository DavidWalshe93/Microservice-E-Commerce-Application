// Created by David Walshe on 22/02/2020

// NPM imports
const {DataTypes} = require("sequelize");
// Local imports
const {sequelize, testConnection} = require("../database/sequelize");

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
    fname: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    lname: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    zipcode: {
        type: DataTypes.STRING(40),
    },
    streetname: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    county: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    country: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
}, {
    timestamps: false
});

// Export Model
module.exports = Customer;