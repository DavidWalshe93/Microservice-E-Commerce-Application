// Created by David Walshe on 15/03/2020

import React from "react";
import OrderTable from "./OrderTable";
import {Col, Container} from "react-bootstrap";

const OrderPage = () => {

    return (
        <>
            <Container fluid={true}>

                <Col xs={{span: 6, offset: 3}}>
                    <h1>Orders</h1>
                    <OrderTable item={["1", "2", "3"]}/>
                </Col>
            </Container>
        </>
    )
};

export default OrderPage;