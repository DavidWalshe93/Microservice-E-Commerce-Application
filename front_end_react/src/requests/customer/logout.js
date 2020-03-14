// Created by David Walshe on 08/03/2020

// Handles logout requests to the customer service
const logoutRequest = async (token) => {
    const response = await fetch("http://localhost:3001/logout", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": `Bearer ${token}`
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });

    return response.json();
};

export default logoutRequest;