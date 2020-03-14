// Created by David Walshe on 14/03/2020

const services = {
    customer: 3001,
    catalog: 3002,
    cart: 3003,
    order: 3004
};

const getRequestContent = (method, headers) => {
    // Request content to send
    return {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json;charset=UTF-8',
            ...headers
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };
};

const serviceRequest = async (options) => {

    // Deconstruct options
    let {service, endpoint, method, headers, body} = {...options};

    // Pre-processing
    service = service.toLowerCase();
    method = method.toUpperCase();
    headers = !!headers ? headers : {};

    let requestContent = getRequestContent(method, headers);

    // Append body field if required.
    if (method === "POST") {
        body = !!body ? body : {};
        body = JSON.stringify(body);
        requestContent = {
            ...requestContent,
            body
        }
    }

    // Request template
    const response = await fetch(`http://localhost:${services[service]}/${endpoint}`, requestContent);

    // Return JSON response
    return response.json();
};

export default serviceRequest;