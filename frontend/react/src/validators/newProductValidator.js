// Created by David Walshe on 07/03/2020

import {useFormik} from "formik";
import * as Yup from "yup";
import newProductRequest from "../requests/product/newProduct";

const NewProductValidator = () => {
    return useFormik({
        initialValues: {
            name: "",
            price: "",
            quantity: "",
            image: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('No product name was provided'),
            price: Yup.number()
                .required('No price was provided')
                .min(0.01),
            quantity: Yup.number()
                .required('No quantity was provided')
                .min(1, "Value must be 1 or greater to be valid")
                .integer("Input must be a whole number"),
            image: Yup.string()
                .required("Image path is required")
                .min("/images/".length)
                .matches(/.*\.(png|jpeg|jpg)$/, {message: "Selected image must have a .png/.jpeg/.jpg file extension"})
        }),
        onSubmit: values => {
            newProductRequest(values);
        },
    });
};

export default NewProductValidator;