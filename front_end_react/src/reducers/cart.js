// Created by David Walshe on 09/03/2020

// Default initial state of Reducer on startup
const cartReducerDefaultState = {
    items: []
};

const cartReducer = (state = cartReducerDefaultState, action) => {
    console.log("action", action);
    console.log("state", state);
    switch (action.type) {
        case "ADD":
            const itemExists = state.items.some((item) => item.productID === action.item.productID);
            if (itemExists) {
                return {
                    items: [...state.items.map((item) => {
                        if (item.productID === action.item.productID) {
                            item.quantity += parseInt(action.buyQuantity);
                            return item;
                        } else {
                            return item;
                        }
                    })]
                };
            } else {
                console.log("HERE ME");
                return {
                    items: [...state.items, action.item]
                }
            }
        default:
            return state;
    }
};

export default cartReducer;