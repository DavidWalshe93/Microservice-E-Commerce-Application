// Created by David Walshe on 25/02/2020

// npm imports
import React from "react";
import {useFormik} from "formik";

const RegisterPage = () => {

    const formik = useFormik({
        initialValues: {
            firstname: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor={"firstname"}>First Name</label>
                <input
                    id={"firstname"}
                    name={"firstname"}
                    type={"firstname"}
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                />
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
};

export default RegisterPage;