// Created by David Walshe on 22/02/2020

// Local module imports
const app = require("./app");

// Get PORT for this service.
const PORT = process.env.PORT || 3001;

// Start express server.
app.listen(PORT, () => {
    console.log("Customer service running on port", PORT)
});