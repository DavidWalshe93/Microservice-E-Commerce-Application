// Created by David Walshe on 25/02/2020

// npm imports
import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";

// local imports
import cars from "../../data"
import ProductCard from "./ProductCard";
import BuyConfirmation from "../BuyConfirmation";

const ProductPage = () => {

    const [show, setShow] = useState(0);
    const [data, setData] = useState({});

    const displayConfirmation = (data) => {
        setShow(true);
        setData(data);
    };

    return (
        <Container>
            {<BuyConfirmation data={data} show={show} setShow={setShow}/>}
            <Row>
                {cars.map((car) => (
                    <Col xs={3} className={"mb-5"} key={car.id}>
                        <ProductCard data={car} displayConfirmation={displayConfirmation}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default ProductPage;
