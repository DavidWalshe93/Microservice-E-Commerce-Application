// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {Button, Col, Form} from "react-bootstrap"
// Local imports
import RegistrationValidator from "../validators/registrationValidator";
import TextField from "./form_components/TextField";
import "../styles/styles.scss"
import CheckBoxField from "./form_components/CheckboxField";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const RegisterPage = (props) => {

    const formik = RegistrationValidator(props.dispatch);

    const fieldWidth = 3;
    const fieldOffset = 3;

    if (props.customer.token) {
        return <Redirect to={"/"}/>;
    }

    return (
        <>
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md={{span: fieldWidth + 2, offset: fieldOffset + 1}}>
                        {/*Heading*/}
                        <h4 className={"welcome-msg"}>Welcome to CIT Auto Buyers.</h4>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={{span: fieldWidth + 3, offset: fieldOffset + 1}}>
                        {/*Sub-Heading*/}
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
                    {/*/!*Address2*!/*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"address2"}>
                        <TextField name="address2" label="Address Line 2" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*/!*City*!/*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"city"}>
                        <TextField name="city" label="City" formik={formik}/>
                    </Form.Group>
                    {/*/!*County*!/*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"state"}>
                        <TextField name="state" label="County" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Country*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"country"}>
                        <TextField name="country" label="Country" formik={formik}/>
                    </Form.Group>
                    {/*ZIP*/}
                    <Form.Group as={Col} md={fieldWidth} controlId={"eircode"}>
                        <TextField name="eircode" label="Eircode" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Admin Flag*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"isAdmin"}>
                        <CheckBoxField name={"isAdmin"} label={"Is this an admin account?"} formik={formik}/>
                    </Form.Group>
                    {/*Submit button*/}
                    <Form.Group as={Col} md={{span: fieldWidth * 2, offset: fieldOffset}} controlId={"submit"}>
                        <Button className={"create-account-button"} type={"submit"}>Create account</Button>
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


export default connect(mapStateToProps)(RegisterPage);