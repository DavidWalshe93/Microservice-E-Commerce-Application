// Created by David Walshe on 14/03/2020

import serviceRequest from "../baseRequest";

const syncLocalCartToService = (items) => {
    return serviceRequest({
        service: "cart",
        endpoint: "bulkAdd",
        method: "POST",
        body: {
            ...items
        }
    });
};

export default syncLocalCartToService;