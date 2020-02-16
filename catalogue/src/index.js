// Created by David Walshe on 15/02/2020

// Import express application setup.
const app = require("./app");

const port = process.env.PORT;

// Run application.
app.listen(port, () => {
    console.log("Server is running on port", port)
});