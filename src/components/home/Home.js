    import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function Home() {
    const [hotels, setHotels] = useState([]);
    const { HotelPage, handleSubmit } = useForm();
    const history = useHistory();
    const data = "";
    const url = BASE_URL + "establishments";
    const options = { headers };

  
    async function onSubmit(data) {
        console.log("data", data);
        const url = BASE_URL + "contacts";
        const options = { headers, method: "GET", body: JSON.stringify(data) };
    
        await fetch(url, options);
        history.push("/hotels")
    }
   

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setHotels(json);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
       <h1>Need a place to stay?</h1> 
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Bergen has multiple places to stay</h2>
        <Form.Group>
          <Form.Label>Try searching for one!</Form.Label>
          <Form.Control
            name='search'
            placeholder='Search by name or location.'
            ref={HotelPage}
          />
        </Form.Group>
        
        <Button type='submit'>Search</Button>
      </Form>

    </>
    )
}

export default Home;



 
