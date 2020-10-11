import React, { useState, useEffect } from "react"
import { BASE_URL, headers } from "../../constants/api"
import AddBookingModal from "../modal/AddBookingModal"

const HotelDetailPage = ({ match }) => {
  const id = match.params.id
  const [hotel, setHotels] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const url = BASE_URL + "establishments/" + id
    const options = { headers }
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setHotels(json)
      })
      .catch((error) => console.log(error))
  }, [id])

  if (!hotel) return <h1>Hotel not found!</h1>

  const { name, price, description, image } = hotel

  return (
    <>
      <AddBookingModal open={open} onClose={() => setOpen(false)} />
      <div className="p-4 min-h-screen">
        <div className="h-32 rounded-lg relative shadow-lg bg-white mb-4">
          <div
            className="absolute top-20 right-0 bg-red-700 rounded-lg py-3 px-3 text-xs text-white"
            style={{ top: 25 }}
          >
            {price} / day
          </div>
          {image && (
            <img
              id="hero"
              src={image}
              className="w-full h-full rounded-lg object-cover"
              alt={name}
            />
          )}
        </div>
        <div className="flex">
          <div className="rounded-lg h-10 w-10 bg-white m-3 shadow-md"></div>
          <div className="rounded-lg h-10 w-10 bg-white m-3 shadow-md"></div>
          <div className="rounded-lg h-10 w-10 bg-white m-3 shadow-md"></div>
          <div className="rounded-lg h-10 w-10 bg-white m-3 shadow-md"></div>
          <div className="rounded-lg h-10 w-10 bg-white m-3 shadow-md"></div>
        </div>
        <div className="flex text-3xl">
          <i className="fa fa-coffee m-3"></i>
          <i className="fa fa-shower m-3"></i>
          <i className="fa fa-wifi m-3"></i>
          <i className="fa fa-bed m-3"></i>
        </div>
        <button
          className="bg-red-800 shadow-md px-2 py-3 text-white rounded-lg w-full"
          onClick={() => setOpen(true)}
        >
          Book Now
        </button>

        <h3 className="text-green-800 font-bold mt-12 mb-8">About hotel</h3>
        <p>{description}</p>
      </div>
    </>
  )
}

export default HotelDetailPage
