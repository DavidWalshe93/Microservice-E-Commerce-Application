// Created by David Walshe on 17/03/2020

// Created by David Walshe on 26/02/2020

// npm import
import React from "react";
import {Toast} from "react-bootstrap";
import "../../styles/styles.scss";

const PurchaseConfirmation = ({show, setShow}) => {

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
                        <strong className={"mr-auto"}>Your order has been placed</strong>
                        <small>Just now</small>>
                    </Toast.Header>
                </Toast>
            </div>
        </>
    )
};

export default PurchaseConfirmation;