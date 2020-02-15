// Created by David Walshe on 15/02/2020

const mySqlConnector = require('mysql');

// Create MySQL database connection
const db = mySqlConnector.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
});

// Reveal db connector for usage.
module.exports = db;