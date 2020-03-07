// Created by David Walshe on 07/03/2020

// npm imports
import {useFormik} from "formik";
import * as Yup from "yup";

const LoginValidator = () => {
    return useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('No email was provided')
                .email('Invalid email address'),
            password: Yup.string()
                .required('No password was provided'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
};

export default LoginValidator;