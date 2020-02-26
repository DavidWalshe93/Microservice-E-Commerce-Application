// Created by David Walshe on 26/02/2020

// npm imports
import React from "react";
import {Jumbotron, Row, Col, Glyphicon} from "react-bootstrap";

// local imports
import "../styles/styles.scss"
import PageNavbar from "./PageNavbar";

const Header = () => (
    <div className={"header"}>
        <PageNavbar className={"navbar"}/>
    </div>
);

export default Header;