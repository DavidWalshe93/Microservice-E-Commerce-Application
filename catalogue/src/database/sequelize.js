// Created by David Walshe on 15/02/2020

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    process.env.SQL_DATABASE,
    process.env.SQL_USERNAME,
    process.env.SQL_PASSWORD,
    {
        host: process.env.HOST,
        dialect: "mysql"
    }
);

const testConnection = async (msg) => {
    try {
        await sequelize.authenticate();
        console.log("SUCCESS", msg)
    } catch (e) {
        console.log("FAILURE", msg, e)
    }
};

module.exports = {sequelize, testConnection};