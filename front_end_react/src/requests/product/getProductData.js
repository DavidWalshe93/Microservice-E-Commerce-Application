// Created by David Walshe on 09/03/2020

// Request Data from catalog service
import serviceRequest from "../baseRequest";

const getProductData = async (setProducts, error, setError) => {
    if (!error) {
        try {
            const response = await serviceRequest({
                service: "catalog",
                endpoint: "getProducts",
                method: "GET",
                body: null
            });


            // Update state
            setProducts(response);
        } catch (e) {
            setError(e);
        }
    }
};

export default getProductData;