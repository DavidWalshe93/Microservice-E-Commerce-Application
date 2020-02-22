// Created by David Walshe on 22/02/2020

// NPM imports
const sqlite = require("sqlite3");
const {Sequelize} = require("sequelize");

// Get DB path
const DATABASE_PATH = process.env.SQLITE_DB_PATH;

// Create database
new sqlite.Database(DATABASE_PATH);

// Connect sequelize instance to SQLite DB.
const sequelize = new Sequelize("database", "", "", {
        dialect: "sqlite",
        storage: DATABASE_PATH,
        logging: process.env.SQL_LOGGER | console.log
    }
);

const testConnection = async (msg) => {
    try {
        await sequelize.authenticate();
        console.log("SUCCESS", msg);
    } catch (e) {
        console.log("FAILURE", msg, e);
    }
};

// Sync database to Sequelize ORM
const syncDatabase = async () => {
    try {
        await sequelize.sync();
    } catch (e) {
        console.log("Could not sync database with model")
    }
};

module.exports = {sequelize, testConnection, syncDatabase};