// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// local imports
import Products from "../components/Products";
import Cart from "../components/Cart"

const AppRouter = () => (
    <Router>
        <>
            <Switch>
                <Route path={["/", "/products"]} component={Products} exact={true}/>
                <Route path={"/cart"} component={Cart}/>
            </Switch>
        </>
    </Router>
);

export default AppRouter;