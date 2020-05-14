// Created by David Walshe on 15/03/2020

import CartEntry from "./CartEntry";
import {Table} from "react-bootstrap";
import React from "react";

const CartTable = (props) => {

    const items = props.items;

    return (
        <Table striped bordered hover size={"sm"} variant="dark">
            <thead>
            <tr>
                <th className={"table-header"}>#</th>
                <th className={"table-header"}>Product</th>
                <th className={"table-header"}>Product Name</th>
                <th className={"table-header"}>Unit Price</th>
                <th className={"table-header"}>Quantity</th>
                <th className={"table-header"}>Total</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                <CartEntry key={index} item={item} index={index}/>
            ))}
            </tbody>
        </Table>
    )
};

export default CartTable;