import React from "react"
import { Link } from "react-router-dom"

export default ({ name = "Apartment in City", price, description, image, id }) => {
  return (
    <div className="p-4 mb-32">
      <h6 className="text-green-900 font-bold mb-4">Featured place</h6>
      <div
        className="w-full h-32 rounded-lg bg-white relative shadow-lg"
        style={{ minWidth: "8rem" }}
      >
        {image && <img src={image} className="w-full h-full rounded-lg object-cover" alt={name} />}
        <div
          className="absolute top-20 right-0 bg-red-700 rounded-lg p-1 text-xs text-white"
          style={{ top: 25 }}
        >
          {price} / day
        </div>
      </div>
      <h6 className="text-green-900 my-4 font-semibold">{name}</h6>
      <p className="text-green-900 my-4">
        {description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
      </p>
      <Link to={`hotels-detail/${id}`}>
        <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full">
          Check out this place
        </button>
      </Link>
    </div>
  )
}
