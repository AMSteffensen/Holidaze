import React, { useState } from "react"
import { BASE_URL, headers } from "../../../constants/api"

export default () => {
  const [{ name, email, message }, setQuestion] = useState({
    name: "",
    email: "",
    message: "",
  })

  const onSubmit = async (event) => {
    const MESSAGE_URL = BASE_URL + "contacts"
    event.preventDefault()
    if (name && email && message) {
      await fetch(MESSAGE_URL, {
        headers,
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
    }
  }

  const handleChange = (event) => {
    event.persist()
    setQuestion((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <div className="bg-gray-900 w-full flex flex-col p-4 text-white">
      <div className="flex justify-center mb-16">
        <img className="w-32" src="/logo-white.svg" />
      </div>
      <h4 className="font-bold mb-2">Questions?</h4>
      <form onSubmit={onSubmit}>
        <label className="mb-2">Name</label>
        <input
          className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black"
          name="name"
          value={name}
          type="text"
          onChange={handleChange}
          required
        ></input>
        <label className="mb-2">Email</label>
        <input
          className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black"
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
          required
        ></input>
        <label className="mb-2">Message</label>
        <textarea
          className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black h-32"
          name="message"
          value={message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full">
          Send Message
        </button>
      </form>
    </div>
  )
}
