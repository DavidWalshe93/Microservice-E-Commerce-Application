// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Form, Button, Col} from "react-bootstrap"


const LoginPage = () => {

    const formik = LoginValidator();

    const fieldWidth = 3;
    const fieldOffset = 3;


    return (
        <>
            <Form noValidate onSumbit={formik.handleSubmit}>

            </Form>
        </>
    )
};

export default LoginPage