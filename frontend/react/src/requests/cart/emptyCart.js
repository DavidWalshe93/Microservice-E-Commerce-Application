// Created by David Walshe on 17/03/2020

import serviceRequest from "../baseRequest";

const removeAllFromServiceCart = async (customerID) => {
    /**
     * Helper function to send a request to the cart service to remove all items from the database.
     */
    try {
        await serviceRequest({
            service: "cart",
            endpoint: `cart/${customerID}/items`,
            method: "DELETE",
            body: null
        });
    } catch (e) {
        console.log(e);
    }

};

export default removeAllFromServiceCart;