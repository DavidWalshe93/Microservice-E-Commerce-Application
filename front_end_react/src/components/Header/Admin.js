// Created by David Walshe on 07/03/2020

import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";

const Admin = () => {

    return (
        <Nav>
            <Nav.Link as={NavLink} to={"/newProduct"} activeClassName={"active"}>Register Product</Nav.Link>
            <Nav.Link as={NavLink} to={"/myAccount"} activeClassName={"active"}>My Account</Nav.Link>
            <Nav.Link as={NavLink} to={"/logout"} activeClassName={"active"}>Logout</Nav.Link>
        </Nav>
    )
};

export default Admin;