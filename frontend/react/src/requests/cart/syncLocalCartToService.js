// Created by David Walshe on 14/03/2020

import serviceRequest from "../baseRequest";

const syncLocalCartToService = async (callback, items, customerID) => {
    /**
     * Helper method to push local items in the cart to be persistent in the Service database
     * on a login. Synchronises local state when service response is returned.
     */
    await serviceRequest({
        service: "cart",
        endpoint: "bulkAdd",
        method: "POST",
        body: {
            customerID,
            items: {...items}
        }
    }).then((data) => {
        callback(data);
    });
};

export default syncLocalCartToService;