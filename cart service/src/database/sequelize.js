// Created by David Walshe on 19/02/2020

// NPM imports
const {Sequelize} = require("sequelize");

// Connect sequelize instance to a In-Memory SQLite DB.
const sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory"
    }
);

const testConnection = async (msg) => {
    try {
        // TODO implement a logger here.
        await sequelize.authenticate();
        console.log("SUCCESS", msg);
    } catch (e) {
        console.log("FAILURE", msg, e);
    }
};

module.exports = {sequelize, testConnection};