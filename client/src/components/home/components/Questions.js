import React from "react"
import { useForm } from "react-hook-form"
import { BASE_URL, headers } from "../../../constants/api"
import useConfirmationModal from "../../../hooks/useConfirmationModal"
import ConfirmationModal from "../../modal/ConfirmationModal"

export default () => {
  const { register, handleSubmit } = useForm()
  const [open, openModal, onClose] = useConfirmationModal()
  const onSubmit = async ({ name, email, message }) => {
    const MESSAGE_URL = BASE_URL + "contacts"
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
      openModal()
    }
  }

  return (
    <>
      <ConfirmationModal
        message={"Your message has been sent successfully"}
        open={open}
        onClose={onClose}
      />
      <div className="bg-gray-900 w-full flex flex-col p-4 text-white">
        <div className="flex justify-center mb-16">
          <img className="w-32" src="/logo-white.svg" alt="white logo" />
        </div>
        <h4 className="font-bold mb-2">Questions?</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="mb-2">Name</label>
          <input
            className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black"
            name="name"
            type="text"
            ref={register}
            required
          ></input>
          <label className="mb-2">Email</label>
          <input
            className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black"
            name="email"
            type="email"
            ref={register}
            required
          ></input>
          <label className="mb-2">Message</label>
          <textarea
            className="rounded-lg px-2 py-3 w-full my-2 outline-none text-black h-32"
            name="message"
            ref={register}
            required
          ></textarea>
          <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}
