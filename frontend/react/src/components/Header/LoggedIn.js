// Created by David Walshe on 07/03/2020

import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import CartIcon from "./CartIcon";

const LoggedIn = () => {

    return (
        <Nav>
            <Navbar.Brand as={Link} to={"/cart"}>
                <CartIcon/>
            </Navbar.Brand>
            <Nav.Link as={NavLink} to={"/orders"} activeClassName={"active"}>My Orders</Nav.Link>
            <Nav.Link as={NavLink} to={"/logout"} activeClassName={"active"}>Logout</Nav.Link>
        </Nav>
    )
};

export default LoggedIn;