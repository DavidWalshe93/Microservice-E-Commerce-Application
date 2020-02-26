// Created by David Walshe on 26/02/2020

// npm import
import React from "react";
import {Toast} from "react-bootstrap"

const BuyConfirmation = ({data, toggle}) => (
    <>
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className={"mr-auto"}>data.name added to cart</strong>
                <small>Just now</small>>
            </Toast.Header>
        </Toast>
    </>
);

export default BuyConfirmation;