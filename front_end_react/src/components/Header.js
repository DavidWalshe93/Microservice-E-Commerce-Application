// Created by David Walshe on 26/02/2020

// npm imports
import React from "react";
import {Jumbotron, Row, Col} from "react-bootstrap";

import "../styles/styles.scss"

const Header = () => (
    <>
        <Jumbotron>
            <Row>
                <Col className={"d-flex justify-content-center"}><h1>Auto Buyer Ltd.</h1></Col>
            </Row>
        </Jumbotron>
    </>
);

export default Header;