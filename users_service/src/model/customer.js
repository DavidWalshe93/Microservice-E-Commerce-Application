// Created by David Walshe on 22/02/2020

// NPM imports
const {DataTypes} = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// Local imports
const {sequelize, testConnection, syncDatabase} = require("../database/sequelize");

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
        allowNull: false,
        unique: true
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
    },
    tokens: {
        type: DataTypes.STRING(),
    }
}, {
    timestamps: false
});


// Model Instance Methods

// Generates a JWT authentication token.
Customer.prototype.generateAuthToken = async function () {
    const customer = this;
    const token = `Bearer ${await jwt.sign({id: customer.customerID}, process.env.JWT_SECRET)}`;

    await Customer.update({
        tokens: JSON.stringify(customer.tokens ? JSON.parse(customer.tokens).concat(token) : [token])
    }, {
        where: {
            customerID: customer.customerID
        }
    });

    return token;
};

Customer.prototype.toJSON = function () {
    const customer = this;
    const customerObject = customer.get({plain: true});

    // Remove sensitive data from response.
    delete customerObject.password;
    delete customerObject.tokens;

    return customerObject;
};

// Model Class Methods
// Verify username and password are correct for login.
Customer.findByCredentials = async function (email, password) {
    const customer = await this.findOne({
        where: {
            email
        },
    });

    if (!customer) {
        throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, customer.password);

    if (!isMatch) {
        throw new Error("Unable to login");
    }

    return customer;
};

// Model Hooks
// Hash password.
Customer.beforeCreate(async (customer, options) => {
    customer.password = await bcrypt.hash(customer.password, 8)
});

syncDatabase();

// Export Model
module.exports = Customer;