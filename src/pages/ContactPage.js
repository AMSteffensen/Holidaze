import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../constants/api";



function ContactPage() {
    //const [hotels, setHotels] = useState([]);
    const {register, handleSubmit} = useForm();
    const history = useHistory();
    const data = "";
    const url = BASE_URL + "establishments";
    const options = {headers};

    async function onSubmit(data) {
        console.log("data", data);
        const url = BASE_URL + "contacts";
        const options = { headers, method: "POST", body: JSON.stringify(data) };
    
        await fetch(url, options);
        //history.push("/admin/hotels")
    }

    return (
        <>
        <h1>Contact us</h1>
        <p>Welcome to our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem iste fugit. Soluta, molestias aspernatur consequuntur esse rerum explicabo! Quisquam odit placeat fugit delectus iusto!</p>

        <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Questions?</h2>
            <Form.Group>
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control name="name" placeholder="Enter your name" ref={register} />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    E-mail
                </Form.Label>
                <Form.Control name="email" placeholder="Enter your e-mail address" ref={register} />
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Message
                </Form.Label>
                <Form.Control name="email" placeholder="Enter your e-mail address" ref={register} />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    </>
    )
    
}

export default ContactPage;

