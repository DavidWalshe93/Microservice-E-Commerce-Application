// Created by David Walshe on 08/03/2020

import serviceRequest from "../baseRequest";

// Handles logout requests to the customer service
const logoutRequest = async (token) => {

    return serviceRequest({
        service: "customer",
        endpoint: "logout",
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

};

export default logoutRequest;