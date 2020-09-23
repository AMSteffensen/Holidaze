import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="username" placeholder="Enter your username" ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" placeholder="Enter your password" ref={register} />
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
        </>
    );
}

export default Login;

// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import Login from "./Logout";

// function Login() {
//     const { login } = useContext(AuthContext);

//     return <button onClick={login}>Log in</button>;
// }

// export default Login;
