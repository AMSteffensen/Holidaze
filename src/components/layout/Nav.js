import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const NavLinks = ({ open, onClose }) => {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <div className={`flex bg-black fixed w-full top-0 z-30 ${open ? "block" : "hidden"}`}>
      <div className="relative text-white w-full h-full">
        <button
          className="absolute w-10 h-10 bg-white text-black shadow-lg flex justify-center items-center"
          onClick={onClose}
          style={{ left: 15, top: 15 }}
        >
          <i className="fa fa-close"></i>
        </button>
        <Link to="/" onClick={onClose}>
          <h2 className="text-center my-6 uppercase">Home</h2>
        </Link>
        <Link to="/hotels" onClick={onClose}>
          <h2 className="text-center my-6 uppercase">Hotels</h2>
        </Link>
        <Link to="/contact" onClick={onClose}>
          <h2 className="text-center my-6 uppercase">Contact</h2>
        </Link>
        {isAuthenticated() && (
          <Link to="/admin" onClick={onClose}>
            <h2 className="text-center my-6 uppercase">Admin</h2>
          </Link>
        )}
      </div>
    </div>
  )
}

function Nav() {
  const history = useHistory()
  const { logout, isAuthenticated } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  return (
    <>
      <NavLinks open={open} onClose={() => setOpen(false)} />
      <nav className="p-4 w-full flex">
        <button
          className="w-10 h-10 bg-white shadow-lg flex justify-center items-center"
          onClick={() => setOpen(true)}
        >
          <i className="fa fa-bars"></i>
        </button>
        <div id="logo" className="flex flex-1 justify-center">
          <Link to="/">
            <img className="h-16" src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <Link
          to={!isAuthenticated() ? "/login" : ""}
          onClick={() => {
            logout()
            history.push("/")
          }}
        >
          <div className="w-10 h-10 flex justify-center items-center text-green-700">
            <i className={`fa ${isAuthenticated() ? "fa-power-off" : "fa-user"}`}></i>
          </div>
        </Link>
      </nav>
    </>
  )
}

export default Nav
