import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import useConfirmationModal from "../../hooks/useConfirmationModal"
import ConfirmationModal from "../modal/ConfirmationModal"

function Login() {
  const { login } = useContext(AuthContext)
  const { register, handleSubmit } = useForm()
  const [open, openModal, onClose] = useConfirmationModal()
  const history = useHistory()

  function onSubmit(credentials) {
    if (login(credentials)) {
      openModal()
    }
    console.log("data", credentials)
  }

  return (
    <>
      <ConfirmationModal
        message="Login successful"
        open={open}
        onClose={() => {
          onClose()
          history.push("/admin")
        }}
      />
      <form
        className="flex flex-col min-h-screen p-4 text-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-bold mb-6 text-xl">Login</h2>
        <div className="flex flex-col mb-4">
          <label>Username</label>
          <input
            className="py-3 px-2 rounded-lg shadow-xl"
            type="text"
            name="username"
            ref={register}
          ></input>
        </div>
        <div className="flex flex-col mb-4">
          <label>Password</label>
          <input
            className="py-3 px-2 rounded-lg shadow-xl"
            type="password"
            name="password"
            ref={register}
          ></input>
        </div>
        <div className="flex justify-center mb-4">
          <button
            className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-32"
            ref={register}
          >
            Login
          </button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-bold">Register</span>
          </Link>
        </p>
      </form>
    </>
  )
}

export default Login
