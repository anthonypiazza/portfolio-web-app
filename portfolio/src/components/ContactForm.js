import React from "react";
import { withFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

import {
    FormStyle,
    FormErrors,
    FormField,
    FormSubmitButton,
    TextArea
} from './StyledComponents';

function ContactForm({ errors, touched, isSubmitting }) {
    return (
        <FormStyle className="form">
            <label>FULL NAME:</label>
            {touched.name && errors.name && <FormErrors>{errors.name}</FormErrors>}
            <FormField type="text" name="name" />
            <label>EMAIL:</label>
            {touched.email && errors.email && <FormErrors>{errors.email}</FormErrors>}
            {/* if there is an error, this shows you the errors message. */}
            <FormField type="email" name="email" />
            <label>SUBJECT:</label>
            {touched.subject && errors.subject && <FormErrors>{errors.subject}</FormErrors>}
            <FormField type="subject" name="subject" />
            <label>MESSAGE:</label>
            {touched.subject && errors.subject && <FormErrors>{errors.subject}</FormErrors>}
            <TextArea component={() => (
                <textarea 
                    style={{
                        borderRadius: '5px', 
                        width: '99%', 
                        height: '100px', 
                        marginBottom: '25px'
                    }} 
                ></textarea>
            )} />
            <FormSubmitButton type="submit" disabled={isSubmitting}>Submit!</FormSubmitButton>
        </FormStyle>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ name, email, subject, message}) {
        return {
            name: name || "",
            email: email || "",
            subject: subject || "",
            message: message || ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2, "Name not valid")
            .required("Name is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        subject: Yup.string()
            .required("Subject is required"),
        message: Yup.string()
            .required("Message is required"),
    }),

    handleSubmit(values, { resetForm, setSubmitting }) {
        axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
            window.alert(res.data.name);
            console.log(res) // Data was created successfully and logs to console
            resetForm();
            setSubmitting(false);
        })
        .catch(err => {
            console.log(err); // There was an error creating the data and logs to console
            setSubmitting(false);
        });
    } 
})(ContactForm);

export default FormikLoginForm;