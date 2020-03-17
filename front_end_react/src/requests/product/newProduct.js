// Created by David Walshe on 17/03/2020

// Request Data from catalog service
import serviceRequest from "../baseRequest";

const newProductRequest = async (data) => {
    const {name, price, quantity, image} = {...data};

    const response = await serviceRequest({
        service: "catalog",
        endpoint: "newProduct",
        method: "POST",
        body: {
            name,
            price,
            quantity,
            image
        }
    });
};

export default newProductRequest;