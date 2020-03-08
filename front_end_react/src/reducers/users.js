// Created by David Walshe on 08/03/2020

const userReducerDefaultState = {
    fname: "",
    lname: "",
    username: "guest",
    email: "",
};

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return [...state, ...action.user];
        default:
            return state;
    }
};

export default userReducer;