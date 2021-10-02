import React from 'react';

import {Button, Input, Form as SemanticForm, Icon } from 'semantic-ui-react';
import {Formik} from 'formik';
import * as Yup from 'yup';


const LoginForm = (props) => {
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
        .email('Invalid email')
        .required('Required')
    });

    return (
        <SemanticForm style={{margin: '4rem'}}>
            {/* Titulo y logo */}
            <h1 style={{color:'#274d7c', textAlign:'center', fontWeight:'bolder', marginBottom:'2rem'}}>Project-Connect</h1>
            
            {/* Formulario */}
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={
                    console.log('a')
                }
            />

            <div style={{textAlign: 'center', marginTop:0, marginBottom:'3rem'}}>
                {/* Recuperar clave */}
                {props.aLink ?<a href={props.aLink.link} style={{fontSize:'15px'}}>{props.aLink.name}</a>:<></>}
            </div>

            <div>
            {/* Boton de inicio de sesion */}
            {
                props.linkButton ?
                <Button animated color='green' floated='right' size='big' style={{marginLeft:'1rem'}}>
                    <Button.Content visible>{props.linkButton.name}</Button.Content>
                    <Button.Content  hidden><Icon name='file alternate outline'></Icon></Button.Content>
                </Button>:<></>
            }

            {/* Boton de registro */}
            <Button animated content='primary' primary floated='right' size='big'>
                <Button.Content visible>{props.submitButton}</Button.Content>
                <Button.Content hidden><Icon name='arrow right'></Icon></Button.Content>
            </Button>
            </div>
        </SemanticForm>
    )   
}

export default LoginForm;