import React from 'react';

import {Button, Input, Form as SemanticForm, Icon } from 'semantic-ui-react';

const Form = (props) => {
    const renderInput = () => (
        props.placeHolders.map((placeHolder) => (
            <div>
                <Input fluid placeholder={placeHolder} type="text" style={{marginTop: '1rem', marginBottom: '2rem'}} size='big' />
            </div>
        ))    
    )
        return (
            <SemanticForm style={{margin: '4rem'}}>
                <h1 style={{color:'#274d7c', textAlign:'center', fontWeight:'bolder', marginBottom:'2rem'}}>Project-Connect</h1>
                {renderInput()}
                {
                    props.linkButton ?
                    <Button animated color='green' floated='right' size='big' style={{marginLeft:'1rem'}}>
                        <Button.Content visible>
                            {props.linkButton.name}
                        </Button.Content>
                        <Button.Content  hidden>
                            <Icon name='file alternate outline'>

                            </Icon>
                        </Button.Content>
                    </Button>
                    :
                    <></>
                }
                <Button animated content='primary' primary floated='right' size='big'>
                    <Button.Content visible>
                        {props.submitButton}
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right'></Icon>
                    </Button.Content>
                </Button>
            </SemanticForm>
    )
}

export default Form;