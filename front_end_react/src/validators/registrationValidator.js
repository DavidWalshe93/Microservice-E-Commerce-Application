// Created by David Walshe on 26/02/2020

import {useFormik} from "formik";
import * as Yup from "yup";

const RegistrationValidator = () => {
    return useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            verifyPassword: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('First name required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Last name required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('No email was provided'),
            phone: Yup.string()
                .matches("\\+?[0-9 ]+", "Can only contain numbers")
                .trim("Remove leading/trailing whitespace")
                .required('No phone number was provided'),
            password: Yup.string()
                .min(8, "Passwords must be over 8 characters long")
                .required('No password was provided'),
            verifyPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords are not the same")
                .required('No password was provided'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
};

export default RegistrationValidator;