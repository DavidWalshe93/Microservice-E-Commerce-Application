// npm imports
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

const jsxRoot = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsxRoot, document.getElementById('root'));
