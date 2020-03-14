// Created by David Walshe on 08/03/2020

import serviceRequest from "../baseRequest";

// Handles login requests to the customer service
const loginRequest = async (email, password) => {

    return serviceRequest({
        service: "customer",
        endpoint: "login",
        method: "POST",
        body: {
            email,
            password
        }
    });
};

export default loginRequest;