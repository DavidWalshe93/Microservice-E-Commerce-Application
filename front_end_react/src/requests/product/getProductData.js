// Created by David Walshe on 09/03/2020

// Request Data from catalog service
import serviceRequest from "../baseRequest";

const getProductData = async (setProducts, error, setError) => {
    if (!error) {

        const response = await serviceRequest({
            service: "catalog",
            endpoint: "getProducts",
            method: "GET",
            body: null
        });

        try {
            let products = response;

            // Prepend images folder to image path.
            products.map((item) => {
                return item.image = `/images/${item.image}`
            });

            // Update state
            setProducts(products);
        } catch (e) {
            setError(e);
        }
    }
};

export default getProductData;