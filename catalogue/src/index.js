// Created by David Walshe on 15/02/2020

const app = require("./app");
const a = require("./model/product");

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on port", port)
});