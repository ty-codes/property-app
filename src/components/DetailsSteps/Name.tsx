import './Steps.css';
import { CustomInput } from "../";
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";


const Name = (
    { firstName, lastName, setFirstName, setLastName, activeStep, setActiveStep }
        : {
            firstName: string,
            lastName: string,
            activeStep: number,
            setFirstName: React.Dispatch<React.SetStateAction<string>>,
            setLastName: React.Dispatch<React.SetStateAction<string>>,
            setActiveStep: React.Dispatch<React.SetStateAction<number>>
        }): JSX.Element => {

    const initialValues = {
        firstname: "",
        lastname: "",
    };
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Please enter your first name"),
        lastname: Yup.string().required("Please enter your last name"),
    });

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
        useFormik({
            initialValues,
            validationSchema,
            onSubmit: (values) => {
                console.log(values);
            },
        });

    return (
        <div className="level" >
            <h2>What's your name</h2>
            <p>Let's get to know you</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstname'>First Name</label><br />
                <CustomInput
                    value={values.firstname}
                    name="firstname"
                    type="text"
                    placeholder="First name"
                    required
                    onChange={handleChange}
                /><br />
                <label htmlFor='lastname'>Last Name</label><br />
                <CustomInput
                    value={values.lastname}
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                    required
                    onChange={handleChange}

                /><br />
                <button
                    disabled={!(values.firstname && values.lastname) && true}
                    className={activeStep === 3 ? "btn filled_btn blank" : "btn filled_btn"}
                    onClick={() => { var step = activeStep + 1; setActiveStep(step) }}>
                    Next
                </button>
            </form>
        </div>
    )
};

export default Name;