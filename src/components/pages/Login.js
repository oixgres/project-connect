import React, {useState} from 'react';
import LoginForm from '../LoginForm';
import LoginExample from '../LoginExample';

import { Grid, Card } from 'semantic-ui-react';

const Register = () => {  

    return (
        <div>
            <Grid columns={2} relaxed stackable>
                {/* <Grid.Column style={{padding:'5rem', outerHeight:'100px'}}> */}
                <Grid.Column style={{padding:'5rem'}} mobile={16} tablet={16} computer={8}>
                    <LoginExample />
                </Grid.Column>
                <Grid.Column style={{padding:'5rem'}} mobile={16} tablet={16} computer={8}>
                    <Card fluid>
                        <LoginForm
                            title="Project-Connect"
                            placeholders={{
                                mail:"Introduce your name",
                                pass:"Introuce your password"
                            }}
                            submitButton="Log in"
                            linkButton={{
                                name: 'Sign up',
                                link: '/'
                            }}
                            aLink={{
                                name:'Did you forget your password?',
                                link:'/'
                            }}
                        />
                    </Card>
                </Grid.Column>
            </Grid>
           
        </div>
    )
}

export default Register;