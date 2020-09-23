import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../constants/api";


const HotelDetailPage = ({ match }) => {
    const id = match.params.id;


    const [hotel, setHotels] = useState([]);

    const url = BASE_URL + "establishments/" + id;

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setHotels(json);
            })
            .catch((error) => console.log(error));
    }, []);


    if (!hotel) return <h1>Hotel not found!</h1>

    return (
        <>
            <h1>{hotel.name}</h1>
            <h2>${hotel.price}/night</h2>
            <h3>Hotel id: {id}</h3>      
            <p>Created at: {hotel.createdAt}</p>  
            <p>Description:{hotel.description}</p> 
            <p>Max Guests: {hotel.maxGuests}</p>   
            <img src={hotel.image} alt=""/>
        </>
    )

}
    

export default HotelDetailPage;

