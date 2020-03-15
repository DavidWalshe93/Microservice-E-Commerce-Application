// Created by David Walshe on 25/02/2020

// npm import
import React, {useEffect, useState} from "react";
import {Button, Col, Container} from "react-bootstrap";
// Local imports
import "../../styles/styles.scss"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import CartModal from "./CartModal";
import CartTable from "./CartTable";


const CartPage = (props) => {

    const [goToOrders, setGoToOrders] = useState(false);

    const [items, setItems] = useState(props.cart.items);
    const [itemsInCart, setItemsInCart] = useState(false);
    const [show, setShow] = useState(false);
    const [messageType, setMessageType] = useState("LOGIN");

    useEffect(() => {
        /**
         * Updates view when the redux cart items change state.
         */
        setItems(props.cart.items);
    }, [props.cart.items]);

    useEffect(() => {
        /**
         * Enables/Disables the order/empty cart button depending if items are present in cart.
         */
        if (items.length > 0) {             // Cart is empty
            setItemsInCart(false);
        } else {                            // Cart has items
            setItemsInCart(true);
        }
    }, [items]);

    const placeOrder = (e) => {
        /**
         * Redirects to the orders page if "Place Order" is successful, otherwise open info modal.
         */
        if (props.customer.token) {
            setGoToOrders(true);
        } else {
            setMessageType("LOGIN");
            setShow(true)
        }
    };

    // Relocated to orders page.
    if (goToOrders) {
        return <Redirect to={"/orders"}/>
    }

    return (
        <>
            <CartModal show={show} setShow={setShow} messageType={messageType}/>
            <Container fluid={true}>
                <Col xs={{span: 10, offset: 1}}>
                    <Button className={"cart-button"}
                            variant={"success"}
                            onClick={placeOrder}
                            disabled={itemsInCart}
                    >
                        <p className={"button-text"}>Place Order</p>
                    </Button>
                    <Button className={"cart-button"}
                            variant={"danger"}
                            disabled={itemsInCart}
                    >
                        <p className={"button-text"}>Empty Cart</p>
                    </Button>
                    <CartTable items={items}/>
                </Col>
            </Container>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        customer: state.customer,
        cart: state.cart
    }
};

export default connect(mapStateToProps)(CartPage);