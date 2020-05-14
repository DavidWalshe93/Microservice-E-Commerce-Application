// Created by David Walshe on 15/03/2020

import React, {useState} from "react";
import OrderTable from "./OrderTable";
import {Col, Container} from "react-bootstrap";
import OrderModal from "./OrderModal";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const OrderPage = () => {

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});

    return (
        <>
            <OrderModal show={show} setShow={setShow} modalData={modalData}/>
            <Container fluid={true}>
                <Col xs={{span: 6, offset: 3}}>
                    <h1>Orders</h1>
                    <OrderTable setShow={setShow} setModalData={setModalData}/>
                </Col>
            </Container>
        </>
    )
};

export default OrderPage;