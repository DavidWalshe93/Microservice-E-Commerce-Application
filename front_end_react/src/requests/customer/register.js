// Created by David Walshe on 12/03/2020

// Handles login requests to the customer service
const registerRequest = async (values) => {
    const response = await fetch("http://localhost:3001/register", {
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
        body: JSON.stringify(values)
    });

    return response.json();
};

export default registerRequest;