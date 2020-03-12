// Created by David Walshe on 12/03/2020

import {Col, Container, Form, Row} from "react-bootstrap";
import React from "react";

const CheckBoxField = ({label, name, formik, type = "checkbox"}) => {

    // Unpack variables
    const {onChange, onBlur, value} = {...formik.getFieldProps(name)};
    const touched = formik.touched[`${name}`];
    const error = formik.errors[`${name}`];

    return (
        <Container>
            <Row>
                {/*<Col xs={{span: 5, offset: 1}}>*/}
                {/*    <Form.Label>{label}</Form.Label>*/}
                {/*</Col>*/}
                <Col md={{span: 10, offset: 0}}>
                    <Form.Check
                        type={type}
                        label={label}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        isInvalid={touched && error}
                        isValid={touched && !error}
                    />
                </Col>

            </Row>
        </Container>
    )
};


export default CheckBoxField;