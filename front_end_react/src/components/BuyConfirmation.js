// Created by David Walshe on 26/02/2020

// npm import
import React from "react";
import {Toast} from "react-bootstrap";
import "../styles/styles.scss";

const BuyConfirmation = ({data, show, setShow}) => {

    return (
        <>
            <div
                aria-live="polite"
                aria-atomic="true"
                className={"toast-wrapper"}
            >
                <Toast
                    show={show > 0} onClose={() => setShow(false)} delay={3000} autohide>
                    <Toast.Header>
                        <strong className={"mr-auto"}>{data.name} added to cart</strong>
                        <small>Just now</small>>
                    </Toast.Header>
                </Toast>
            </div>
        </>
    )
};

export default BuyConfirmation;