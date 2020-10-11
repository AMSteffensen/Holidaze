import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { BASE_URL, headers, PATCH } from "../../constants/api"
import DeleteHotel from "./DeleteHotel"

function AddHotel() {
  const defaultState = {
    name: "",
    email: "",
  }

  const history = useHistory()
  const { register, handleSubmit } = useForm()
  const [hotel, setHotel] = useState(defaultState)

  let { id } = useParams()

  useEffect(() => {
    const fetchUrl = BASE_URL + "establishments/" + id
    const options = { headers }

    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setHotel(json))
      .catch((error) => console.log(error))
  }, [id])

  async function onSubmit(data) {
    const fetchUrl = BASE_URL + "establishments/" + id

    const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) }
    await fetch(fetchUrl, updateOptions)
    history.push("/admin/hotels")
  }

  return (
    <>
      <form className="p-4 text-green-800 min-h-screen" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl text-center font-bold">Edit Establishment</h1>
        <div className="flex flex-col flex-1 mb-4">
          <label>Name</label>
          <input
            ref={register}
            defaultValue={hotel.name}
            name="name"
            className="py-3 px-2 rounded-lg shadow-xl"
            type="text"
            placeholder="Enter a name for the Hotel"
          ></input>
        </div>
        <div className="flex flex-col flex-1 mb-4">
          <label>Image</label>
          <input
            ref={register}
            defaultValue={hotel.image}
            name="image"
            className="py-3 px-2 rounded-lg shadow-xl"
            type="text"
            placeholder="URL of the image"
          ></input>
        </div>
        <div className="flex flex-col flex-1 mb-4">
          <label>Contact</label>
          <input
            ref={register}
            defaultValue={hotel.email}
            name="email"
            className="py-3 px-2 rounded-lg shadow-xl"
            type="email"
            placeholder="Contact email address"
          ></input>
        </div>
        <div className="flex space-x-2 mb-8">
          <div className="flex flex-1 flex-col">
            <label>Price</label>
            <input
              ref={register}
              defaultValue={hotel.price}
              name="price"
              className="py-3 px-2 rounded-lg shadow-xl w-full"
              type="text"
              placeholder="Rate per day"
            ></input>
          </div>
          <div className="flex flex-1 flex-col">
            <label>Max Guests</label>
            <input
              ref={register}
              defaultValue={hotel.maxGuests}
              name="maxGuests"
              className="py-3 px-2 rounded-lg shadow-xl w-full"
              type="text"
              placeholder="Maximum Guests"
            ></input>
          </div>
        </div>
        <button
          className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg uppercase w-full mb-4"
          type="submit"
        >
          Save
        </button>
        <DeleteHotel id={id} />
      </form>
    </>
  )
}

export default AddHotel
