import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
    const { register, handleSubmit, errors } = useForm();


    function onSubmit(data) {
        console.log("data", data)

        //make api call and send data to the server
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstName" placeholder="First name" ref={register({ required: true })}/>
            {errors.firstName && <p>First name is required</p>}

            <input type="submit"/>
        </form>
    )
}

export default Contact;