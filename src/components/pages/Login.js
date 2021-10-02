import React, {useState} from 'react';
import LoginForm from '../LoginForm';

import { Grid, Card } from 'semantic-ui-react';

const Register = () => {  

    return (
        <div>
            <Grid columns={2} relaxed stackable>
                <Grid.Column style={{padding:'5rem'}}>
                    <p>Prueba</p>
                </Grid.Column>
                <Grid.Column style={{padding:'5rem'}}>
                    <Card fluid>
                        <LoginForm
                            title="Project-Connect"
                            placeHolders={[
                                "Introduce your name",
                                "Introuce your paassword"
                            ]}
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