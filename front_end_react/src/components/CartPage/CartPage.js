// Created by David Walshe on 25/02/2020

// npm import
import React, {useEffect, useState} from "react";
import {Button, Col, Container} from "react-bootstrap";
// Local imports
import "../../styles/styles.scss"
import {connect} from "react-redux";
import CartModal from "./CartModal";
import CartTable from "./CartTable";
import newOrderRequest from "../../requests/order/addNewOrder";
import removeAllFromServiceCart from "../../requests/cart/emptyCart";
import {removeAll} from "../../actions/cart";
import PurchaseConfirmation from "./PurchaseConfirmation";


const CartPage = (props) => {

    const {customer} = {...props};

    const [showToast, setShowToast] = useState(false);
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
            if (newOrderRequest(customer.customerID, items, null, null)) {
                removeAllFromServiceCart(connect.customerID);
                props.dispatch(removeAll());
                setShowToast(true);
            }
            // setGoToOrders(true);
        } else {
            setMessageType("LOGIN");
            setShow(true)
        }
    };

    const btn_inline_style = "mx-5 p-2";

    return (
        <>
            <CartModal show={show} setShow={setShow} messageType={messageType}/>
            {<PurchaseConfirmation show={showToast} setShow={setShowToast}/>}
            <Container fluid={true}>
                <Col xs={{span: 10, offset: 1}}>
                    <div className={"d-flex justify-content-around"}>
                        <Button className={`cart-button ${btn_inline_style}`}
                                variant={"success"}
                                onClick={placeOrder}
                                disabled={itemsInCart}
                        >
                            <p className={"button-text"}>Place Order</p>
                        </Button>
                        <Button className={`cart-button ${btn_inline_style}`}
                                variant={"danger"}
                                disabled={itemsInCart}
                        >
                            <p className={"button-text"}>Empty Cart</p>
                        </Button>
                    </div>
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