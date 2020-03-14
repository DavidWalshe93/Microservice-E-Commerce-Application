// Created by David Walshe on 14/03/2020

const removeFromServiceCart = async (customerID, productID) => {
    /**
     * Helper function to send a request to the cart service to add to an item to the database
     * and return the service response.
     */
    const response = await fetch(`http://localhost:3003/cart/${customerID}/items/${productID}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });

    console.log(response);

    return response.json()
};

export default removeFromServiceCart;