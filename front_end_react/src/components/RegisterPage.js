// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Form, Button, Col, Container, Row} from "react-bootstrap"

// Local imports
import RegistrationValidator from "../validators/registrationValidator";
import TextField from "./RegisterForm/TextField";
import "../styles/styles.scss"
import AdViewer from "./AdViewer";

const RegisterPage = () => {

    const formik = RegistrationValidator();

    const fieldWidth = 3;
    const fieldOffset = 3;

    return (
        <>
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md={{span: fieldWidth + 3, offset: fieldOffset + 1}}>
                        {/*Headings*/}
                        <h4 className={"welcome-msg"}>Welcome to CIT Auto Buyers.</h4>
                        <h5 className={"welcome-msg__details"}>To create your new account we will just need a few
                            details.</h5>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*First Name*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"firstName"}>
                        <TextField name="firstName" label="First Name" formik={formik}/>
                    </Form.Group>
                    {/*Last Name*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"lastName"}>
                        <TextField name="lastName" label="Last Name" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Email*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"email"}>
                        <TextField name="email" label="Email" formik={formik} type={"email"}/>
                    </Form.Group>
                    {/*Phone*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"phone"}>
                        <TextField name="phone" label="Phone Number" formik={formik} type={"phone"}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*/!*Password*!/*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"password"}>
                        <TextField name="password" label="Password" formik={formik} type={"password"}/>
                    </Form.Group>
                    {/*/!*Verify Password*!/*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"verifyPassword"}>
                        <TextField name="verifyPassword" label="Verify Password" formik={formik} type={"password"}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*/!*Address1*!/*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"address1"}>
                        <TextField name="address1" label="Street Name" formik={formik}/>
                    </Form.Group>
                    {/*/!*AddressfieldWidth*!/*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"address2"}>
                        <TextField name="address2" label="Address Line 2" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*/!*City*!/*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"city"}>
                        <TextField name="city" label="City" formik={formik}/>
                    </Form.Group>
                    {/*/!*State*!/*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"state"}>
                        <TextField name="state" label="State" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Country*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"country"}>
                        <TextField name="country" label="Country" formik={formik}/>
                    </Form.Group>
                    {/*ZIP*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"zip"}>
                        <TextField name="zip" label="ZIP" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Submit button*/}
                    <Form.Group as={Col} md={{span: fieldWidth * 2, offset: fieldOffset}} controlId={"submitRow"}>
                        <Button className={"create-account-button"} type={"submit"}>Create account</Button>
                    </Form.Group>
                </Form.Row>
            </Form>S
        </>
    )
};

export default RegisterPage;