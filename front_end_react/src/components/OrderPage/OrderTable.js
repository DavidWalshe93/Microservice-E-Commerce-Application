// Created by David Walshe on 15/03/2020

import {Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";

const OrderTable = (props) => {

    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        getOrderData(setOrders, error, setError)
    }, []);

    return (
        <Table striped bordered hover size={"sm"} variant="dark">
            <thead>
            <tr>
                <th className={"table-header"}>#</th>
                <th className={"table-header"}>Purchase Date</th>
                <th className={"table-header"}>Total</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order, index) => (
                console.log(order)
                // <CartEntry key={index} item={item} index={index}/>
            ))}
            </tbody>
        </Table>
    )
};

export default OrderTable;