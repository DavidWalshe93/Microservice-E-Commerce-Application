// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// local imports
import ProductPage from "../components/ProductPage";
import CartPage from "../components/CartPage"
import LoginPage from "../components/LoginPage";


const AppRouter = () => (
    <Router>
        <>
            <Switch>
                <Route path={["/", "/products"]} componet={ProductPage} exact={true}/>
                <Route path={"/cart"} component={CartPage}/>
                <Route path={"/login"} component={LoginPage}/>
            </Switch>
        </>
    </Router>
);

export default AppRouter;