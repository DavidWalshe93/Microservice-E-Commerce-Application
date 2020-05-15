// Created by David Walshe on 07/03/2020

// npm imports
import {useFormik} from "formik";
import * as Yup from "yup";
// Local imports
import {loginCustomer} from "../actions/customers";
import loginRequest from "../requests/customer/login"

const LoginValidator = (props) => {

    console.log(props);

    const {dispatch, setShowToast} = {...props};

    return useFormik({
        initialValues: {
            email: "test@example.com",
            password: "12345678"
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('No email was provided')
                .email('Invalid email address'),
            password: Yup.string()
                .required('No password was provided'),
        }),
        onSubmit: async (values) => {
            let response = null;
            try {
                // Update customer session.
                response = await loginRequest(values.email, values.password, setShowToast)
            } catch (e) {

                console.log(typeof setShowToast);
                setShowToast(true);
                console.log(e)
            }
            dispatch(loginCustomer(response));
        },
    });
};

export default LoginValidator;