// Created by David Walshe on 25/02/2020

// npm imports
import {combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage"
// local imports
import customerReducer from "../reducers/customers"

// Set up persistence config for state
const persistConfig = {
    key: "root",
    storage
};

// Wrap custom reducer in persistence Reducer
const persistedCustomerReducer = persistReducer(persistConfig, customerReducer);

// Create Redux store for handling React app state.
export default () => {
    let store = createStore(combineReducers({
            customer: persistedCustomerReducer
        }
    ));
    let persistor = persistStore(store);
    return {store, persistor};
}