// Created by David Walshe on 08/03/2020

export const loginCustomer = (response) => ({
    type: "LOGIN",
    customer: response.customer,
    token: response.token,
});

export const logoutCustomer = () => ({
    type: "LOGOUT"
});
