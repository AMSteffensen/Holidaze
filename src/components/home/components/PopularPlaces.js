import React from "react"
import { Link } from "react-router-dom"

const PlaceTile = ({ id, name, image, price, rating }) => {
  return (
    <div
      className="w-64 h-32 rounded-lg bg-white relative shadow-lg mr-4"
      style={{ minWidth: "8rem" }}
    >
      <Link to={`/hotels/${id}`}>
        <img src={image} className="w-full h-full rounded-lg" alt={name} />
        <div
          className="absolute top-20 right-0 bg-red-700 rounded-lg py-3 px-3 text-xs text-white"
          style={{ top: 25 }}
        >
          {price} / day
        </div>
        <div className="absolute bottom-0 right-0 bg-red-700 rounded-lg p-1 text-xs text-white">
          {rating} <i className="fa fa-star"></i>
        </div>
      </Link>
    </div>
  )
}

const LoadingTile = () => (
  <div
    className="w-64 h-32 rounded-lg bg-white relative shadow-lg mr-4"
    style={{ minWidth: "8rem" }}
  />
)

export default ({ places = [] }) => {
  return (
    <div className="pl-2 pt-6 pb-3">
      <h6 className="text-green-900 font-bold mb-3 ml-2">Popular places</h6>
      <div className="flex overflow-auto px-2 py-4">
        {places.length > 0
          ? places.map((place) => (
              <PlaceTile
                key={place.id}
                price={place.price}
                rating={4}
                image={place.image}
                id={place.id}
                name={place.name}
              />
            ))
          : Array.from({ length: 6 }).map((_, index) => <LoadingTile key={index} />)}
      </div>
    </div>
  )
}
