import React from "react"
import { Link } from "react-router-dom"

export default () => {
  return (
    <div>
      <div className="bg-gray-900 w-full flex flex-col py-16 px-8 text-white">
        <Link to="/">
          <h4 className="font-bold my-2 text-center">Home</h4>
        </Link>
        <Link to="/contact">
          <h4 className="font-bold my-2 text-center">Contact</h4>
        </Link>
        <Link to="/login">
          <h4 className="font-bold my-2 text-center">Login</h4>
        </Link>
        <div id="social" className="flex text-6xl justify-around items-stretch my-16">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-snapchat"></i>
        </div>
        <p className="text-center">Copyright 2020</p>
      </div>
    </div>
  )
}
