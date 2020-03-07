// Created by David Walshe on 07/03/2020

import React from "react";
import RegistrationValidator from "../validators/registrationValidator";
import {Button, Col, Form} from "react-bootstrap";
import TextField from "./form_components/TextField";

const NewProductPage = () => {

    const formik = NewProductValidator();

    const fieldWidth = 3;
    const fieldOffset = 3;

    return (
        <>
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md={{span: fieldWidth + 2, offset: fieldOffset + 1}}>
                        {/*Heading*/}
                        <h4 className={"welcome-msg"}>Add a new product to the store inventory.</h4>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Product*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"productName"}>
                        <TextField name="productName" label="Product Name" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Price*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"productPrice"}>
                        <TextField name="productPrice" label="Unit Price" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Quantity*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"productQuantity"}>
                        <TextField name="productQuantity" label="Quantity In-Stock" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Image*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"productImage"}>
                        <TextField name="productImage" label="Product Image" formik={formik}/>
                    </Form.Group>
                </Form.Row>
            </Form>
        </>
    )
};

export default NewProductPage;