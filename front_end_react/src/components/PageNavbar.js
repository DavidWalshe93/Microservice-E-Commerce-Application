// Created by David Walshe on 26/02/2020

// npm imports
import React from "react"
import {NavLink, Link} from "react-router-dom";
import {Navbar, Nav, Badge} from "react-bootstrap";
import "../styles/styles.scss";

const PageNavbar = () => (
    <>
        <Navbar fixed={"top"} expand={"lg"} bg={"dark"} variant={"dark"}>
            <Navbar.Brand href="#home">CIT Auto Buyers</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to={"/products"} activeClassName={"active"}>Products</Nav.Link>
                </Nav>
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
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default PageNavbar;