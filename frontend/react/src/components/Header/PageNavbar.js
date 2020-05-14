// Created by David Walshe on 26/02/2020

// npm imports
import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {connect} from "react-redux"
// Local imports
import "../../styles/styles.scss";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";
import Admin from "./Admin";

const PageNavbar = (props) => {

    const [pageLoginState, setPageLoginState] = useState(<LoggedOut/>);
    const [accountName, setAccountName] = useState(`${props.firstName} ${props.lastName}`);

    useEffect(() => {
        if (!!props.token) {
            setPageLoginState(props.isAdmin === true ? <Admin/> : <LoggedIn/>);
        } else {
            setPageLoginState(<LoggedOut/>)
        }
    }, [props.token, props.isAdmin]);

    useEffect(() => {
        if (!!props.firstName) {
            setAccountName(`${props.firstName} ${props.lastName}`)
        } else {
            setAccountName(null);
        }
    }, [props.firstName, props.lastName]);

    return (
        <>
            <Navbar fixed={"top"} expand={"lg"} bg={"dark"} variant={"dark"}>
                <Navbar.Brand as={NavLink} to={"/products"}>CIT Auto Buyers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to={"/products"} activeClassName={"active"}>Products</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        {!!accountName ? <Nav.Link as={NavLink} to={"/orders"}
                                                   activeClassName={"active"}>Logged in
                            as {accountName}</Nav.Link> : null}
                    </Nav>
                    {pageLoginState}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        firstName: state.customer.firstName,
        lastName: state.customer.lastName,
        token: state.customer.token,
        isAdmin: state.customer.isAdmin
    }
};

export default connect(mapStateToProps)(PageNavbar);