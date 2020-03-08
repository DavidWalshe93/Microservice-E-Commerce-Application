// Created by David Walshe on 19/02/2020

// Include local modules.
const app = require("./app");

// Get PORT for this service.
const PORT = process.env.PORT;

// Start express server.
app.listen(PORT, () => {
    console.log("App now running in %s mode on port %d", app.get("env"), PORT);
});