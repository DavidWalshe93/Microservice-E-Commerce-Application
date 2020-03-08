// Created by David Walshe on 08/03/2020

// Handles login requests to the customer service
const loginRequest = async (email, password) => {
    try {
        const response = await fetch("http://localhost:3001/login", {
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
            body: JSON.stringify({email, password})
        });

        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
};

export default loginRequest;