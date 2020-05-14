// Created by David Walshe on 15/02/2020

// Import express application setup.
const app = require("./app");

const port = process.env.PORT || 3002;

// Run application.
app.listen(port, () => {
    console.log("Catalog Service is running on port", port)
});