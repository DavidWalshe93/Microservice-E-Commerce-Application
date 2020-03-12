// Created by David Walshe on 07/03/2020

// npm imports
import {useFormik} from "formik";
import * as Yup from "yup";
// Local imports
import {loginCustomer} from "../actions/customers";
import loginRequest from "../requests/login"

const LoginValidator = (dispatch) => {
    return useFormik({
        initialValues: {
            email: "mytest@example.com",
            password: "myPass"
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('No email was provided')
                .email('Invalid email address'),
            password: Yup.string()
                .required('No password was provided'),
        }),
        onSubmit: async (values) => {
            try {
                await dispatch(loginCustomer(await loginRequest(values.email, values.password)));
            } catch (e) {
                console.log(e)
            }
        },
    });
};

export default LoginValidator;