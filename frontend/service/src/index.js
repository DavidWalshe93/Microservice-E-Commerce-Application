// Created by David Walshe on 16/02/2020

// Import express application setup.
const app = require("./app");

const port = process.env.PORT || 8079;

app.listen(port, () => {
    console.log("Front-end Service is running on port", port)
});