// Created by David Walshe on 12/03/2020

// NPM imports
import {Button, Image} from "react-bootstrap";
import React from "react";
import {connect} from "react-redux";
// Local imports
import {removeItem} from "../actions/cart";
import removeFromServiceCart from "../requests/cart/removeFromCart";


const CartEntry = (props) => {

    const removeFromCart = async () => {
        /**
         *  Callback to delete a single item from cart.
         */

        if (!props.customerID) {                                // User logged in.
            await updateLocalState(props.item.productID)
        } else {                                                // User not logged in.
            await updateServiceState(props.item.productID, props.customerID)
        }
    };

    const updateLocalState = async (productID) => {
        /**
         * Updates the local state of React for when a item is deleted.
         */
        props.dispatch(removeItem(productID))
    };

    const updateServiceState = async (productID, customerID) => {
        /**
         * Updates the service database when an item is deleted and a user is logged in.
         */
        const response = await removeFromServiceCart(customerID, productID);
        await updateLocalState(parseInt(response.productID))
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
                    onClick={async (e) => {
                        await removeFromCart()
                    }}
                    variant={"danger"}
                >Remove
                </Button>
            </td>
        </tr>
    );
};


const mapStateToProps = (state) => {
    return {
        customerID: state.customer.customerID,
    }
};


export default connect(mapStateToProps)(CartEntry);