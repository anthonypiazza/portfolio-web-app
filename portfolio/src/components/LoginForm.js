import React from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

import '../components/css/LoginForm.css';

function LoginForm({ errors, touched, isSubmitting }) {
    return (
        <Form className="form">
            {touched.name && errors.name && <p className="errors">{errors.name}</p>}
            <Field className="field" placeholder="Name:" type="text" name="name" />
            {touched.email && errors.email && <p className="errors">{errors.email}</p>}
            {/* if there is an error, this shows you the errors message. */}
            <Field className="field" placeholder="Email:" type="email" name="email" />
            {touched.subject && errors.subject && <p className="errors">{errors.subject}</p>}
            <Field className="field" placeholder="Subject:" type="subject" name="subject" />
            <button type="submit" disabled={isSubmitting}>Submit!</button>
        </Form>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ name, email, subject}) {
        return {
            name: name || "",
            email: email || "",
            subject: subject || "",
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
    }),

    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.email === "alreadytaken@atb.dev") {
          setErrors({ email: "That email is already taken" });
        } else {
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
    }  
})(LoginForm);

export default FormikLoginForm;