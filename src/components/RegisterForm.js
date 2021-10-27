import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'

const RegisterForm = () => {
    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string()
            .required('Required'),
        phone: Yup.string()
            .required('Required'),
    });

    return (
        <Formik
            initialValues={{
                firsname: '',
                lastname: '',
                email: '',
                phone:'',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={schema}
            onSubmit = {(values, { setSubmitting }) => {
                // setSubmitting(true);
                console.log(values);
            }}
        >

        </Formik>
        // <div></div>
        
    )
}

export default RegisterForm;