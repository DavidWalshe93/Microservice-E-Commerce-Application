// Created by David Walshe on 14/03/2020

import serviceRequest from "../baseRequest";

const addToServiceCart = async (customerID, item) => {
    /**
     * Helper function to send a request to the cart service to add to an item to the database
     * and return the service response.
     */

    return serviceRequest({
        service: "cart",
        endpoint: "add",
        method: "POST",
        body: {
            ...item,
            customerID
        }
    });
};

export default addToServiceCart;