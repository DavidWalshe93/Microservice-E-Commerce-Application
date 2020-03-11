// Created by David Walshe on 26/02/2020

// npm import
import React from "react";
import {Toast} from "react-bootstrap";
import "../styles/styles.scss";

const BuyConfirmation = ({data, quantity, show, setShow}) => {


    const buildMessage = () => {
        /**
         * Returns notification message with plural or singular suffix depending on
         * quantity added.
         * @type {string}
         */
        let suffix = "";
        if (quantity > 1) {
            suffix = "s"
        }

        return `${quantity} '${data.name}'${suffix} added to your cart`
    };

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
                        <strong className={"mr-auto"}>{buildMessage()}</strong>
                        <small>Just now</small>>
                    </Toast.Header>
                </Toast>
            </div>
        </>
    )
};

export default BuyConfirmation;