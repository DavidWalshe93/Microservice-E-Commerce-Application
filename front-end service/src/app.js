// Created by David Walshe on 16/02/2020

// Built-in Imports
const path = require("path");
// NPM Imports
const express = require("express");
const hbs = require("hbs");

// Define paths for resources
const publicDirectoryPath = path.join(__dirname, "..", "public");
const viewsPath = path.join(__dirname, "..", "templates", "views");
const partialsPath = path.join(__dirname, "..", "templates", "partials");

// Get instance of express server
const app = express();

// Setup handlebar (hbs) engine and views path location with express
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.set("view engine", "hbs");

// Setup static resources for express
app.use(express.static(publicDirectoryPath));

// Adds json "body" field to the "request" parameter via middleware.
app.use(express.json());

// Add routers to express
app.get("", (req, res) => {
    try {
        res.render("index", {})
    } catch (e) {
        console.log(e)
    }
});

module.exports = app;
