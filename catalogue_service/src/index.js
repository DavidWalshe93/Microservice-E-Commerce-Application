// Created by David Walshe on 15/02/2020

// Import express application setup.
const app = require("./app");

const port = process.env.PORT || 3002;

// Run application.
app.listen(port, () => {
    console.log("MYSQL CONN INFO")
    console.log("\t", process.env.SQL_HOST);
    console.log("\t", process.env.SQL_USERNAME);
    console.log("\t", process.env.SQL_PASSWORD);
    console.log("\t", process.env.SQL_DATABASE);
    console.log("Catalog Service is running on port", port)
});