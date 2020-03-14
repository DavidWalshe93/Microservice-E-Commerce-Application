// Created by David Walshe on 12/03/2020

// Handles login requests to the customer service
import serviceRequest from "../baseRequest";

const registerRequest = async (values) => {

    return serviceRequest({
        service: "customer",
        endpoint: "register",
        method: "POST",
        body: values
    });
};

export default registerRequest;