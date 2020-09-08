import React from 'react'
import Terms from './ContactTerms'
import Container from '../layout/Container'
import LoginButton from '../forms/loginButton'
import Form from '../forms/Form'

function Contact() {
    return (
       <Container>
            <div className="contact">
            <h2 className="contact__title">Register</h2>
            <div className="">
                <Form>
                    <h3>Register Us</h3>
                    <input placeholder="Username" type="text"/>
                    <input placeholder="Email" type="text"/>
                    <button>Register</button>
                    <button>Clear</button>
                </Form>
                <div className="contact__login">
                    <div className="col-login">
                        <LoginButton />
                    </div>
                </div>
                <div>
                    <h3>Terms</h3>
                   <Terms />
                </div>
            </div>
        </div>
       </Container>
    )
}

export default Contact
