// Created by David Walshe on 25/02/2020

// npm imports
import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
// local imports
import ProductCard from "./ProductCard";
import BuyConfirmation from "../BuyConfirmation";
import getProductData from "../../requests/getProductData";

const ProductPage = () => {

    // State
    const [show, setShow] = useState(0);
    const [data, setData] = useState({});
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(undefined);

    // Hooks
    useEffect(() => {
        getProductData(setProducts, error, setError);
        console.log("Init Product", products)
    }, []);

    // Show toast notification.
    const displayConfirmation = (data) => {
        console.log("Pre Products", products);
        setShow(true);
        setData(data);
        console.log("Post Products", products);
    };

    if (error) {
        return <div>Error: {error.message}</div>
    } else {
        return (
            <Container>
                {<BuyConfirmation data={data} show={show} setShow={setShow}/>}
                <Row>
                    {products.map((product) => (
                        <Col xs={4} className={"mb-5"} key={product.productID}>
                            <ProductCard data={product} displayConfirmation={displayConfirmation}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
};

export default ProductPage;
