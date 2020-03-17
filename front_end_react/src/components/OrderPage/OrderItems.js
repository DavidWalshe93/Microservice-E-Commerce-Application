// Created by David Walshe on 15/03/2020

import React from "react";

const OrderItems = (props) => {

    const items = props.modalData.orderDetails;

    return (
        <>
            {items.map((item) => {
                return (<tr key={item}>
                        <td>{item.productID}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>€{item.price}</td>
                        <td>€{(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                )
            })
            }
        </>
    )

};

export default OrderItems;