// Created by David Walshe on 25/02/2020

// npm imports
import {combineReducers, createStore} from "redux";
// local imports

// Create Redux store for handling React app state.
export default () => {
    return createStore(
        combineReducers({})
    );
}