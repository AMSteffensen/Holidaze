import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Input from "../components/contact/Input";
import Form from "../components/contact/Form";
import Button from "../components/contact/Button";

import { useHistory } from "react-router-dom";
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
            <Input name="firstName" placeholder="First name" ref={register({ required: true })}/>

            <Button/>
        </Form>
        
    </>
    )
    
}

export default ContactPage;


