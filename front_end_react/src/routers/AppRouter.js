// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// local imports
import ProductPage from "../components/ProductPage/ProductPage";
import CartPage from "../components/CartPage/CartPage"
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/header/Header";
import NewProductPage from "../components/NewProductPage";
import MyAccountPage from "../components/MyAccountPage";
import LogoutPage from "../components/LogoutPage";
import OrderPage from "../components/OrderPage/OrderPage";


const AppRouter = () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path={["/", "/products"]} component={ProductPage} exact={true}/>
                <Route path={"/cart"} component={CartPage}/>
                <Route path={"/login"} component={LoginPage}/>
                <Route path={"/register"} component={RegisterPage}/>
                <Route path={"/newProduct"} component={NewProductPage}/>
                <Route path={"/myAccount"} component={MyAccountPage}/>
                <Route path={"/orders"} component={OrderPage}/>
                <Route path={"/logout"} component={LogoutPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    </Router>
);

export default AppRouter;