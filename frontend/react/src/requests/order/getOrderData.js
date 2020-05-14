// Created by David Walshe on 15/03/2020

import serviceRequest from "../baseRequest";

const getOrderData = async (setOrders, customerID, error, setError) => {
    if (!error) {

        console.log(customerID);

        try {
            const orders = await serviceRequest({
                service: "order",
                endpoint: `getOrders/${customerID}`,
                method: "GET",
                body: null
            }).then((data) => {
                // Update state
                console.log("orders", data);
                setOrders(
                    data
                );
            });

        } catch (e) {
            console.log(e);
            setError(e);
        }
    }
};

export default getOrderData;