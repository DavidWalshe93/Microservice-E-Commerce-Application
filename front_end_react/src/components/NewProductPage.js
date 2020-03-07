// Created by David Walshe on 07/03/2020

// npm imports
import React from "react";
import {Button, Col, Form} from "react-bootstrap";

// local imports
import TextField from "./form_components/TextField";
import NewProductValidator from "../validators/newProductValidator";

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
                        <h4>Add a new product to the store inventory.</h4>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Product*/}
                    <Form.Group as={Col} md={{span: fieldWidth * 2, offset: fieldOffset}} controlId={"name"}>
                        <TextField name="name" label="Product Name" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Price*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset}} controlId={"price"}>
                        <TextField name="price" label="Unit Price" formik={formik}/>
                    </Form.Group>
                    {/*Quantity*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: 0}} controlId={"quantity"}>
                        <TextField name="quantity" label="Quantity In-Stock" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Image*/}
                    <Form.Group as={Col} md={{span: fieldWidth * 2, offset: fieldOffset}} controlId={"image"}>
                        <TextField name="image" label="Product Image" formik={formik}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/*Submit button*/}
                    <Form.Group as={Col} md={{span: fieldWidth, offset: fieldOffset + 5}} controlId={"submitRow3"}>
                        <Button type={"submit"}>Add Product</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </>
    )
};

export default NewProductPage;