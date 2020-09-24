import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";
import {BASE_URL, headers} from "../constants/api";

function HotelPage() {
  const [hotels, setHotels] = useState([]);
  const {HotelPage, handleSubmit} = useForm();
  const history = useHistory();
  const data = "";
  const url = BASE_URL + "establishments";
  const options = {headers};

  async function onSubmit(data) {
    console.log("data", data);
    const url = BASE_URL + "contacts";
    const options = {headers, method: "POST", body: JSON.stringify(data)};

    await fetch(url, options);
    //history.push("/admin/hotels")
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
      <h1>Hotels</h1>
      {hotels.map((hotel) => {
        return (
          <li key={hotel.id}>
            <NavLink to={`hotels-detail/${hotel.id}`}>{hotel.name}</NavLink>
          </li>
        );
      })}

    </>
  );
}

export default HotelPage;
