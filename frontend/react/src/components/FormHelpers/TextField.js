// Created by David Walshe on 26/02/2020

import React from "react";
import {Form} from "react-bootstrap";


const TextField = ({label, name, formik, type = "text"}) => {

    // Unpack variables
    const {onChange, onBlur, value} = {...formik.getFieldProps(name)};
    const touched = formik.touched[`${name}`];
    const error = formik.errors[`${name}`];

    return (
        <>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                isInvalid={touched && error}
                isValid={touched && !error}
            />
            <Form.Control.Feedback/>
            <Form.Control.Feedback type={"invalid"}>{error}</Form.Control.Feedback>
        </>
    )
};


export default TextField;