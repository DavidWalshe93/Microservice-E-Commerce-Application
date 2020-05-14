// Created by David Walshe on 16/02/2020

// Import express application setup.
const app = require("./app");

const port = process.env.PORT || 8079;

app.listen(port, () => {
    console.log("Registered Endpoints")
    console.log("\t", process.env.REACT_APP_USER_SERVICE_DEST, ":", process.env.REACT_APP_USER_SERVICE_PORT)
    console.log("\t",process.env.REACT_APP_CATALOG_SERVICE_DEST, ":", process.env.REACT_APP_CATALOG_SERVICE_PORT)
    console.log("\t",process.env.REACT_APP_CART_SERVICE_DEST, ":", process.env.REACT_APP_CART_SERVICE_PORT)
    console.log("\t",process.env.REACT_APP_ORDER_SERVICE_DEST, ":", process.env.REACT_APP_ORDER_SERVICE_PORT)
    console.log("Front-end Service is running on port", port)
});