// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Container, Row, Col} from "react-bootstrap";

// local imports
import cars from "../data"
import ProductCard from "./ProductCard";

const ProductPage = () => (
    <>
        <p>Hello Products</p>
    </>
    // <Container>
    //     <Row>
    //         {cars.map((car) => (
    //             <Col xs={3} className={"mb-5"} key={car.id}>
    //                 <ProductCard data={car}/>
    //             </Col>
    //         ))}
    //     </Row>
    // </Container>
);

export default ProductPage;
