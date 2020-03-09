// Created by David Walshe on 09/03/2020

// Default initial state of Reducer on startup
const cartReducerDefaultState = {
    items: []
};

const cartReducer = (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.item];
        default:
            return state;
    }
};

export default cartReducer;