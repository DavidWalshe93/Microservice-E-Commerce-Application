// Created by David Walshe on 16/03/2020

// Request Data from catalog service
import serviceRequest from "../baseRequest";

const newOrderRequest = async (customerID, items, error, setError) => {
    // if (!error) {

    try {
        const response = await serviceRequest({
            service: "order",
            endpoint: "newOrder",
            method: "POST",
            body: {
                customerID,
                saledate: new Date().getTime(),
                orderDetails: [
                    ...items,
                ]
            }
        });

        console.log(response);
        // Update state
        // setProducts(products);
    } catch (e) {
        console.log(e);
        // setError(e);
    }
    // }
};

export default newOrderRequest;