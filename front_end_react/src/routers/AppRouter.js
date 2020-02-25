// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// local imports
import Products from "../components/Products";

const AppRouter = () => (
    <Router>
        <>
            <Switch>
                <Route path={["/", "/products"]} component={Products} exact={true}/>
            </Switch>
        </>
    </Router>
);

export default AppRouter;