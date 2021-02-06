import React, { useState } from 'react'
import { HeaderContainer } from '../container/Header'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'
import { FooterContainer } from '../container/Footer'
 
export default function Signup() {
    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const isValid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup =  (event) => {
        event.preventDefault();
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder='First Name'
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder='Email Address'
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder='Password'
                            value={password}
                            autoComplete = "off"
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isValid} type="submit">
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user? <Form.Link to='/signin'>Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}