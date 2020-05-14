// Created by David Walshe on 16/02/2020

// Import express application setup.
const app = require("./app");

const port = process.env.PORT || 8079;

app.listen(port, () => {
    console.log("Registered Endpoints")
    console.log("\t", process.env.USER_SERVICE_DEST, ":", process.env.USER_SERVICE_PORT)
    console.log("\t",process.env.CATALOG_SERVICE_DEST, ":", process.env.CATALOG_SERVICE_PORT)
    console.log("\t",process.env.CART_SERVICE_DEST, ":", process.env.CART_SERVICE_PORT)
    console.log("\t",process.env.ORDER_SERVICE_DEST, ":", process.env.ORDER_SERVICE_PORT)
    console.log("Front-end Service is running on port", port)
});