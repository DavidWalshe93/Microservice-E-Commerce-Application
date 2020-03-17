// Created by David Walshe on 08/03/2020

import serviceRequest from "../baseRequest";

// Handles login requests to the customer service
const loginRequest = async (email, password, setShowToast) => {

    return serviceRequest({
        service: "customer",
        endpoint: "login",
        method: "POST",
        body: {
            email,
            password
        }
    }).then((res) => {
        if (res.error === "DOES_NOT_EXIST") {
            setShowToast(true);
        } else {
            return res;
        }
    });
};

export default loginRequest;