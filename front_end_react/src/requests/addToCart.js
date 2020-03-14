// Created by David Walshe on 14/03/2020

const addToServiceCart = async (customerID, item) => {
    /**
     * Helper function to send a request to the cart service to add to an item to the database
     * and return the service response.
     */
    const response = await fetch("http://localhost:3003/add", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json;charset=UTF-8'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            ...item,
            customerID
        })
    });

    return response.json()
};

export default addToServiceCart;