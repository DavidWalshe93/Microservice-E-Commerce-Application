// Created by David Walshe on 11/03/2020

import React, {useEffect, useState} from "react";
import {Badge, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";

const CartIcon = (props) => {

    // Local States
    const [items, setItems] = useState(props.cart.items);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    // Update quantity on props.cart change
    useEffect(() => {
        setItems(props.cart.items);
    }, [props.cart]);

    // Get the overall quantity and price of items in the cart after
    // item us updated in the above useEffect.
    useEffect(() => {
        let qty = 0;
        let price = 0;

        items.forEach((item) => {
            console.log(parseInt(item.quantity));
            qty += parseInt(item.quantity);
            price += (parseInt(item.quantity) * item.price);
        });
        setQuantity(qty);
        setPrice(price.toFixed(2));
    }, [items]);


    return (
        <Row>
            <Col xs={1}>
                <img
                    src="/images/shopping_cart.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Col>
            <Col xs={4}>
                <Badge pill variant={"warning"}>{quantity}</Badge>
            </Col>
            <Col xs={2}>
                <h5 className={"header-pricing"}>€{price}</h5>
            </Col>
        </Row>
    )
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(CartIcon);