// Created by David Walshe on 26/02/2020

// npm imports
import React from "react"
import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {connect} from "react-redux"
// Local imports
import "../../styles/styles.scss";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";

const PageNavbar = (props) => (
    <>
        <Navbar fixed={"top"} expand={"lg"} bg={"dark"} variant={"dark"}>
            <Navbar.Brand as={NavLink} to={"/products"}>CIT Auto Buyers</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to={"/products"} activeClassName={"active"}>Products</Nav.Link>
                </Nav>
                {pageSignInState(props.token)}
            </Navbar.Collapse>
        </Navbar>
    </>
);


const pageSignInState = (token) => {
    if (!!token) {
        return <LoggedIn/>
    } else {
        return <LoggedOut/>
    }
};

const mapStateToProps = (state) => {
    return {
        token: state.customer.token
    }
};

export default connect(mapStateToProps)(PageNavbar);