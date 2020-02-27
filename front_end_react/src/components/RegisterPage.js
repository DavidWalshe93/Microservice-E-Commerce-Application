// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Form, Button, Col} from "react-bootstrap"

// Local imports
import RegistrationValidator from "../validators/registrationValidator";
import TextField from "./RegisterForm/TextField";

const RegisterPage = () => {

    const formik = RegistrationValidator();

    return (
        <>
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Row>
                    {/*First Name*/}
                    <Form.Group as={Col} md={{span: 3, offset: 3}} controlId={"firstName"}>
                        <TextField name="firstName" label="First Name" formik={formik}/>
                    </Form.Group>
                    {/*Last Name*/}
                    <Form.Group as={Col} md={3} controlId={"lastName"}>
                        <TextField name="lastName" label="Last Name" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Email*/}
                    <Form.Group as={Col} md={{span: 3, offset: 3}} controlId={"email"}>
                        <TextField name="email" label="Email" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={{span: 3, offset: 3}} controlId={"submitRow"}>
                        <Button type={"submit"}>Submit form</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </>
    )
};

export default RegisterPage;