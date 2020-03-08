// npm imports
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";

const jsxRoot = (
    <Provider>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsxRoot, document.getElementById('root'));
