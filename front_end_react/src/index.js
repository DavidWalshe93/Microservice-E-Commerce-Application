// npm imports
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.scss"
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
// local imports
import configureStore from "./store/configureStore";

// Get the store and the persistence entity to persist state between refreshes.
const {store, persistor} = configureStore();

console.log(store.getState());

const jsxRoot = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter/>
        </PersistGate>
    </Provider>
);

ReactDOM.render(jsxRoot, document.getElementById('root'));
