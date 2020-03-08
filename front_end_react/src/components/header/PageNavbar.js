// Created by David Walshe on 26/02/2020

// npm imports
import React from "react"
import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
// Local imports
import "../../styles/styles.scss";
import LoggedOut from "./LoggedOut";

const PageNavbar = () => (
    <>
        <Navbar fixed={"top"} expand={"lg"} bg={"dark"} variant={"dark"}>
            <Navbar.Brand href="#home">CIT Auto Buyers</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to={"/products"} activeClassName={"active"}>Products</Nav.Link>
                </Nav>
                <LoggedOut/>
                {/*<LoggedIn/>*/}
                {/*<Admin/>*/}
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default PageNavbar;