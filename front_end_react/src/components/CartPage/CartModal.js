// Created by David Walshe on 15/03/2020

import {Button, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

const CartModal = (props) => {

    const {show, setShow, messageType} = {...props};


    const [route, setRoute] = useState("MODAL");

    useEffect(() => {
        setRoute("MODAL");
    }, []);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const message = () => {
        /**
         * Helper method in getting the correct header and body for a Modal messsage.
         */
        switch (messageType) {
            case "LOGIN":
                return {
                    header: "You forgot to login first",
                    body: "To ensure we can keep you up-to-date with your order as it processes we require\n" +
                        "you to login/register. This will only take a few moments of your time but\n" +
                        "will help eliminate any issues in keeping you up-to-date with your order."
                };
            default:
                return {
                    header: "Internal error",
                    body: "No information to show for messageType: " + messageType
                }
        }
    };

    const renderRedirect = () => {
        /**
         * Renders the login/register field if the user selects the corresponding button
         * in the pop-up modal. Passes the return path on success as well.
         */
        switch (route) {
            case "LOGIN":
                return <Redirect to={{
                    pathname: "/login",
                    state: {
                        returnPath: "/cart"
                    }
                }}/>;
            case "REGISTER":
                return <Redirect to={{
                    pathname: "/register",
                    state: {
                        returnPath: "/cart"
                    }
                }}/>;
            default:
                return null
        }
    };


    return (
        <>
            {renderRedirect()}
            <Modal
                show={show}
                size={"lg"}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="login-warning-message"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="login-warning-message">
                        {message().header}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message().body}</p>
                    <Button
                        className={"modal-button-primary"}
                        variant="primary"
                        onClick={(e) => setRoute("LOGIN")}
                    >
                        Login
                    </Button>
                    <Button
                        className={"modal-button-primary"}
                        variant="primary"
                        onClick={(e) => setRoute("REGISTER")}
                    >
                        Register
                    </Button>
                    <Button
                        className={"modal-button-secondary"}
                        variant="secondary"
                        onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default CartModal;