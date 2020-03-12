// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {connect} from "react-redux"
import {Button, Col, Form} from "react-bootstrap"
import {Redirect} from "react-router-dom";
// local imports
import TextField from "./form_components/TextField";
import LoginValidator from "../validators/loginValidator";

import "../styles/styles.scss"

const LoginPage = (props) => {

    const formik = LoginValidator(props.dispatch);

    const fieldWidth = 3;
    const fieldOffset = 4;

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
        customer: state.customer
    }
};


export default connect(mapStateToProps)(LoginPage);