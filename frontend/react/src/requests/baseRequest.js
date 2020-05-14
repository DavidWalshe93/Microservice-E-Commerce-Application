// Created by David Walshe on 14/03/2020

const services = {
    customer: process.env.REACT_APP_USER_SERVICE_DEST,
    catalog: process.env.REACT_APP_CATALOG_SERVICE_DEST,
    cart: process.env.REACT_APP_CART_SERVICE_DEST,
    order: process.env.REACT_APP_ORDER_SERVICE_DEST
};

const ports = {
    customer: process.env.REACT_APP_USER_SERVICE_PORT || 3001,
    catalog: process.env.REACT_APP_CATALOG_SERVICE_PORT || 3002,
    cart: process.env.REACT_APP_CART_SERVICE_PORT || 3003,
    order: process.env.REACT_APP_ORDER_SERVICE_PORT || 3004
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

    console.log(options);

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
    let uri = services[service]
    console.log("URI BEFORE", uri)
    uri = uri || "http://localhost"
    console.log("URI AFTER", uri)
    const request = `${uri}:${ports[service]}/${endpoint}`
    console.log("REQ", request)
    const response = await fetch(request, requestContent);

    // Return JSON response
    return await response.json();
};

export default serviceRequest;
