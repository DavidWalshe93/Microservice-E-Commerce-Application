// Created by David Walshe on 26/02/2020

import {useFormik} from "formik";
import * as Yup from "yup";

const RegistrationValidator = () => {
    return useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            // email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
};

export default RegistrationValidator;