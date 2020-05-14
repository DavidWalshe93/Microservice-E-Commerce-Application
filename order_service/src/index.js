// Created by David Walshe on 22/02/2020

// Import express application setup.
const app = require("./app");

const port = process.env.PORT || 3004;

// Run application.
app.listen(port, () => {
    console.log("Order Service is running on port", port)
});