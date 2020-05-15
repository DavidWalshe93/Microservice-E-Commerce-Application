// Created by David Walshe on 26/02/2020

// npm imports
import {useFormik} from "formik";
import * as Yup from "yup";
import registerRequest from "../requests/customer/register";
import {registerCustomer} from "../actions/customers";

const RegistrationValidator = (dispatch, setShowToast) => {
    return useFormik({
        initialValues: {
            firstName: "Fake",
            lastName: "Account",
            email: "test@example.com",
            phone: "0871234567",
            password: "12345678",
            verifyPassword: "12345678",
            address1: "Apartment A",
            address2: "False Rd.",
            city: "Cork City",
            state: "Cork",
            country: "Ireland",
            eircode: "A00B012",
            isAdmin: false
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
            address1: Yup.string()
                .required('Street name is required'),
            address2: Yup.string(),
            city: Yup.string()
                .required('City name is required'),
            state: Yup.string()
                .required('State is required'),
            country: Yup.string()
                .required('Country is required'),
            eircode: Yup.string()
                .required('Zip is required'),
        }),
        onSubmit: async (values) => {
            console.log(values);
            try {
                await dispatch(registerCustomer(await registerRequest(values, setShowToast)));
            } catch (e) {
                console.log(e)
            }
        }
    })
};

export default RegistrationValidator;