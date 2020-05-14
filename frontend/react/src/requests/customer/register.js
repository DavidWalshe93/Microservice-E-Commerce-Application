// Created by David Walshe on 12/03/2020

// Handles login requests to the customer service
import serviceRequest from "../baseRequest";

const registerRequest = async (values, setShowToast) => {
    return serviceRequest({
        service: "customer",
        endpoint: "register",
        method: "POST",
        body: values
    }).then((res) => {
        if (res.error === "EMAIL_IN_USE") {
            setShowToast(true);
        } else {
            return res;
        }
    })
};

export default registerRequest;