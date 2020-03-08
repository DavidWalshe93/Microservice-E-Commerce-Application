// Created by David Walshe on 25/02/2020

// npm imports
import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
// local imports
import ProductCard from "./ProductCard";
import BuyConfirmation from "../BuyConfirmation";

const ProductPage = () => {

    // State
    const [show, setShow] = useState(0);
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(undefined);

    // Hooks
    useEffect(() => {

        fetchCatalogData();
    });

    // Request Data from catalog service
    const fetchCatalogData = async () => {
        if (!isLoaded && !error) {
            const response = await fetch("http://localhost:3002/getProducts", {
                method: "GET"
            });
            try {
                let products = await response.json();

                products.map((item) => {
                    return item.image = `/images/${item.image}`
                });
                setIsLoaded(true);
                setProducts(products);
            } catch (e) {
                setError(e);
            }
        }
    };

    // Show toast notification.
    const displayConfirmation = (data) => {
        setShow(true);
        setData(data);
    };

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
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
