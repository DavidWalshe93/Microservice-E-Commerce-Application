// Created by David Walshe on 07/03/2020

import {Badge, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import React from "react";

const LoggedOut = () => {

    return (
        <Nav>
            <Nav.Link as={NavLink} to={"/login"} activeClassName={"active"}>Login</Nav.Link>
            <Nav.Link as={NavLink} to={"/register"} activeClassName={"active"}>Register</Nav.Link>
            <Navbar.Brand as={Link} to={"/cart"}>
                <img
                    src="/images/shopping_cart.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Badge pill className={"lblCartCount"} variant={"warning"}>0</Badge>
            </Navbar.Brand>
        </Nav>
    )
};

export default LoggedOut;