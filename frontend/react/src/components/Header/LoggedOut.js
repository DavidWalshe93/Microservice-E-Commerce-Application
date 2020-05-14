// Created by David Walshe on 07/03/2020

import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import CartIcon from "./CartIcon";

const LoggedOut = () => {

    return (
        <Nav>
            <Navbar.Brand as={Link} to={"/cart"}>
                <CartIcon/>
            </Navbar.Brand>
            <Nav.Link as={NavLink} to={"/login"} activeClassName={"active"}>Login</Nav.Link>
            <Nav.Link as={NavLink} to={"/register"} activeClassName={"active"}>Register</Nav.Link>
        </Nav>
    )
};

export default LoggedOut;