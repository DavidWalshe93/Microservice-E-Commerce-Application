// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// local imports
import ProductPage from "../components/ProductPage";
import CartPage from "../components/CartPage"
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import NotFoundPage from "../components/NotFoundPage";


const AppRouter = () => (
    <Router>
        <>
            <Switch>
                <Route path={["/", "/products"]} component={ProductPage} exact={true}/>
                <Route path={"/cart"} component={CartPage}/>
                <Route path={"/login"} component={LoginPage}/>
                <Route path={"/register"} component={RegisterPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    </Router>
);

export default AppRouter;