import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";

function Register() {
    const { register, handleSubmit } = useForm();
    const { registerUser } = useContext(AuthContext);

    const history = useHistory();

    function onSubmit(data) {
        console.log("data", data);
        registerUser(data.username);
        history.push("/admin");
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" ref={register} />
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    );
}

export default Register;
