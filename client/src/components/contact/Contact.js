import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { BASE_URL, headers } from "../../constants/api"
import ConfirmationModal from "../modal/ConfirmationModal"

function ContactPage() {
  const { register: contact, handleSubmit } = useForm()
  const [open, setOpen] = useState(false)
  const url = BASE_URL + "establishments"
  const options = { headers }

  async function onSubmit(data) {
    console.log("data", data)
    const url = BASE_URL + "contacts"
    const options = { headers, method: "POST", body: JSON.stringify(data) }

    setOpen(true)
  }

  return (
    <>
      <ConfirmationModal
        open={open}
        onClose={() => setOpen(false)}
        message={"Your Question has been recorded successfully"}
      />
      <div className="p-4 h-screen text-green-800">
        <h4 className="font-bold mb-2 text-lg">Contact Us</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="mb-2">Name</label>
          <input
            className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black shadow-lg"
            name="name"
            type="text"
            ref={contact()}
            required
          ></input>
          <label className="mb-2">Email</label>
          <input
            className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black shadow-lg"
            name="email"
            type="email"
            ref={contact()}
            required
          ></input>
          <label className="mb-2">Message</label>
          <textarea
            className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black h-32 shadow-lg"
            name="message"
            ref={contact()}
            required
          ></textarea>
          <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full uppercase">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactPage
