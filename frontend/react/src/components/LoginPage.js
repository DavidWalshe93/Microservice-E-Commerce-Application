// Created by David Walshe on 25/02/2020

// npm imports
import React, {useEffect, useState} from "react";
import {connect} from "react-redux"
import {Button, Col, Form} from "react-bootstrap"
import {Redirect} from "react-router-dom";
// local imports
import TextField from "./FormHelpers/TextField";
import LoginValidator from "../validators/loginValidator";
import "../styles/styles.scss"
import {syncCart} from "../actions/cart";
import syncLocalCartToService from "../requests/cart/syncLocalCartToService";
import AccountToast from "./AccountToast";

const LoginPage = (props) => {

    const [showToast, setShowToast] = useState(false);

    const returnPath = !!props.location.state ? props.location.state.returnPath : "/";

    const formik = LoginValidator({
        dispatch: props.dispatch,
        setShowToast
    });

    const fieldWidth = 3;
    const fieldOffset = 4;

    useEffect(() => {
        // If logged in.
        if (!!props.customer.token) {
            // Map items with additional field of customerID for service usage.
            const items = props.cart.items.map((item) => {
                return {
                    ...item,
                    customerID: props.customer.customerID
                }
            });

            // Synchronises local cart state with service cart.
            syncLocalCartToService(syncLocalCart, items, props.customer.customerID);
        }
    }, [props.customer]);

    // Callback for updating local state.
    const syncLocalCart = (data) => {
        props.dispatch(syncCart(data));
    };

    if (props.customer.token) {
        return <Redirect to={returnPath}/>;
    }

    return (
        <>
            <AccountToast show={showToast} setShow={setShowToast} message={"Incorrect account details"}/>
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md={{span: fieldWidth + 3, offset: fieldOffset}}>
                        {/*Heading*/}
                        <h4 className={"login-msg"}>Welcome back</h4>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Email*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"email"}>
                        <TextField name="email" label="Email" formik={formik} type={"email"}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Password*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"password"}>
                        <TextField name="password" label="Password" formik={formik} type={"password"}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Submit button*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"submitRow2"}>
                        <Button className={"login-button"} type={"submit"}>Login</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </>
    )
};


const mapStateToProps = (state) => {
    return {
        customer: state.customer,
        cart: state.cart
    }
};


export default connect(mapStateToProps)(LoginPage);