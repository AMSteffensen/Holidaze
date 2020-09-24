import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, PATCH } from "../../constants/api";
import DeleteHotel from "./DeleteHotel";

function AddHotel() {
    const defaultState = {
        name: "",
        email: "",
    };

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [hotel, setHotel] = useState(defaultState);

    let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setHotel(json))
            .catch((error) => console.log(error));
    }, []);

    async function onSubmit(data) {
        console.log("data", data);

        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
        await fetch(fetchUrl, updateOptions);
        history.push("/admin/hotels");
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Edit Hotel</h1>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" defaultValue={hotel.name} placeholder="Enter a name for the hotel" ref={register} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" defaultValue={hotel.email} placeholder="Enter an email address" ref={register} />
                </Form.Group>

                <Button type="submit">Update</Button>
            </Form>
            <DeleteHotel id={id} />
        </>
    );
}

export default AddHotel;
