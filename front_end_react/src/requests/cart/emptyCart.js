// Created by David Walshe on 17/03/2020

import serviceRequest from "../baseRequest";

const removeFromServiceCart = async (customerID) => {
    /**
     * Helper function to send a request to the cart service to remove all items from the database.
     */
    return serviceRequest({
        service: "cart",
        endpoint: `cart/${customerID}/items`,
        method: "DELETE",
        body: null
    });
};

export default removeFromServiceCart;