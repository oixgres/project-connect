import React from 'react';

import {Button, Input, Form as SemanticForm, Icon, Grid } from 'semantic-ui-react';
import {Formik} from 'formik';
import * as Yup from 'yup';


const LoginForm = (props) => {
    return (
        <div style={{margin: '4rem'}}>
            {/* Titulo y logo */}
            <h1 style={{color:'#274d7c', textAlign:'center', fontWeight:'bolder', marginBottom:'2rem'}}>Project-Connect</h1>
            
            {/* Formulario */}
            <Formik
                initialValues={{email: '',password: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                    .email('Invalid email')
                    .required('This field is required'),
                    pass: Yup.string()
                    .required('Required')
                })}
                onSubmit={(values) => console.log(values)}
            >
                {({values, touched, errors, handleChange, handleSubmit, handleBlur})=>(
                    <form>
                        <Input 
                            fluid
                            size='big'
                            placeholder={props.placeholders.mail}
                            style={{marginTop:'2rem',marginBottom:'1rem'}}
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {errors.email && touched.email ? <div style={{color: 'red'}}>{errors.email}</div> : <></>}
                        <Input
                            fluid
                            type="password"
                            size='big'
                            placeholder={props.placeholders.pass}
                            style={{marginTop:'2rem',marginBottom:'1rem'}}
                            onChange={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />

                    <div style={{textAlign: 'center', marginTop:0, marginBottom:'3rem'}}>
                        {/* Recuperar clave */}
                        {props.aLink ?<a href={props.aLink.link} style={{fontSize:'15px'}}>{props.aLink.name}</a>:<></>}
                    </div>

                    <Grid.Row>
                        {/* Boton de inicio de sesion */}
                        {
                            props.linkButton ?
                            <Button animated color='green' floated='right' size='big' style={{marginLeft:'1rem'}}>
                                <Button.Content visible>{props.linkButton.name}</Button.Content>
                                <Button.Content  hidden><Icon name='file alternate outline'></Icon></Button.Content>
                            </Button>:<></>
                        }

                        {/* Boton de registro */}
                        <Button animated content='primary' primary floated='right' size='big' type='submit' onClick={handleSubmit}>
                            <Button.Content visible>{props.submitButton}</Button.Content>
                            <Button.Content hidden><Icon name='arrow right'></Icon></Button.Content>
                        </Button>
                    </Grid.Row>
                    </form>
                )}   
            </Formik>
        </div>
    )   
}

export default LoginForm;