// Created by David Walshe on 25/02/2020

// npm imports
import React, {useEffect} from "react";
import {connect} from "react-redux"
import {Button, Col, Form} from "react-bootstrap"
import {Redirect} from "react-router-dom";
// local imports
import TextField from "./form_components/TextField";
import LoginValidator from "../validators/loginValidator";

import "../styles/styles.scss"
import {syncCart} from "../actions/cart";
import syncLocalCartToService from "../requests/cart/syncLocalCartToService";

const LoginPage = (props) => {

    const formik = LoginValidator(props.dispatch);

    const fieldWidth = 3;
    const fieldOffset = 4;

    useEffect(() => {
        if (!!props.customer.token) {
            console.log("token", props.customer.token);
            const items = props.cart.items.map((item) => {
                return {
                    ...item,
                    customerID: props.customer.customerID
                }
            });

            console.log("BODY", items);
            syncLocalCartToService(syncLocalCart, items, props.customer.customerID);


            console.log("I am synced and logged in");
        }
    }, [props.customer]);

    const syncLocalCart = (data) => {
        props.dispatch(syncCart(data));
    };

    if (props.customer.token) {
        return <Redirect to={"/"}/>;
    }

    return (
        <>
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