// Created by David Walshe on 12/03/2020

// NPM imports
import {Button, Image} from "react-bootstrap";
import React from "react";
import {connect} from "react-redux";
// Local imports
import {removeItem} from "../actions/cart";


const CartEntry = (props) => {

    // Callback to delete item from cart
    const removeFromCart = (e) => {

        if (!props.customer.customerID) {
            updateLocalState(props.item)
        } else {
            updateServiceState(props.item)
        }

    };

    const updateLocalState = (item) => {
        props.dispatch(removeItem(item))
    };

    const updateServiceState = (item) => {

    };

    return (
        <tr>
            <td className={"table-item"}>{props.index + 1}</td>
            <td width={"80px"}><Image width={"200px"} height={"150px"} src={props.item.image}/></td>
            <td className={"table-item"}>{props.item.name}</td>
            <td className={"table-item"}>€{props.item.price}</td>
            <td className={"table-item"}>{props.item.quantity}</td>
            <td className={"table-item"}>€{(props.item.price * props.item.quantity).toFixed(2)}</td>
            <td width={"30px"} className={"table-item"}>
                <Button
                    onClick={removeFromCart}
                    variant={"danger"}
                >Remove
                </Button>
            </td>
        </tr>
    );
};


const mapStateToProps = (state) => {
    return {
        customer: state.customer,
        cart: state.cart
    }
};


export default connect(mapStateToProps)(CartEntry);