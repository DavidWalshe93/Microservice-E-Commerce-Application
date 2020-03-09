// Created by David Walshe on 08/03/2020

// Default initial state of Reducer on startup
const userReducerDefaultState = {
    customerID: null,
    token: undefined
};

const customerReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                ...action.customer,
                token: action.token
            };
        case "LOGOUT":
            return {
                ...userReducerDefaultState
            };
        default:
            return state;
    }
};

export default customerReducer;