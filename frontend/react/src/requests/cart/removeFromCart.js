// Created by David Walshe on 14/03/2020

import serviceRequest from "../baseRequest";

const removeFromServiceCart = async (customerID, productID) => {
    /**
     * Helper function to send a request to the cart service to add to an item to the database
     * and return the service response.
     */
    return serviceRequest({
        service: "cart",
        endpoint: `cart/${customerID}/items/${productID}`,
        method: "DELETE",
        body: null
    });
};

export default removeFromServiceCart;