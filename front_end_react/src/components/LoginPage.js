// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Form, Button, Col} from "react-bootstrap"
import TextField from "./form_components/TextField";

// local imports
import LoginValidator from "../validators/loginValidator";
import "../styles/styles.scss"

const LoginPage = () => {

    const formik = LoginValidator();

    const fieldWidth = 3;
    const fieldOffset = 4;

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

export default LoginPage