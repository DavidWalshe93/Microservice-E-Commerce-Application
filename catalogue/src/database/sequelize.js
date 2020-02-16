// Created by David Walshe on 15/02/2020

// NPM imports
const {Sequelize} = require("sequelize");

// Connect sequelize instance to MySql db.
const sequelize = new Sequelize(
    process.env.SQL_DATABASE,
    process.env.SQL_USERNAME,
    process.env.SQL_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.HOST,
        logging: process.env.SQL_LOGGER | console.log,
        pool: {
            max: 151,
            min: 1,
            idle: 10
        }
    }
);

// Helper function to test Sequelize connection
const testConnection = async (msg) => {
    try {
        await sequelize.authenticate();
        console.log("SUCCESS", msg)
    } catch (e) {
        console.log("FAILURE", msg, e)
    }
};

module.exports = {sequelize, testConnection};