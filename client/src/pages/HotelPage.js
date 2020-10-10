import React, {useState, useEffect} from "react";
import {BASE_URL, headers} from "../constants/api";
import HotelCard from "../components/card/HotelCard";

function HotelPage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const url = BASE_URL + "establishments";
    const options = {headers};
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHotels(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='p-4 min-h-screen'>
      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <HotelCard link={`/hotels/${hotel.id}`} {...hotel} />
      ))}
    </div>
  );
}

export default HotelPage;
