// Created by David Walshe on 09/03/2020

// Request Data from catalog service
const getProductData = async (setProducts, error, setError) => {
    if (!error) {
        const response = await fetch("http://localhost:3002/getProducts", {
            method: "GET"
        });
        try {
            let products = await response.json();

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