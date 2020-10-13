import React from "react"
import { useForm } from "react-hook-form"
import { BASE_URL, headers } from "../../constants/api"
import ConfirmationModal from "../modal/ConfirmationModal"
import useConfirmationModal from "../../hooks/useConfirmationModal"
import Footer from "../home/components/Footer"
import Container from '@material-ui/core/Container';


function ContactPage() {
  const { register: contact, handleSubmit } = useForm()
  const [open, openModal, onClose] = useConfirmationModal()
  async function onSubmit(data) {
    console.log("data", data)
    const url = BASE_URL + "contacts"
    const options = { headers, method: "POST", body: JSON.stringify(data) }

    await fetch(url, options)
    openModal()
  }

  return (
    <>
    <Container maxWidth="sm">
      <ConfirmationModal
        open={open}
        onClose={onClose}
        message={"Your Query has been recorded successfully"}
      />
      <div className="p-4 text-green-800 mb-12">
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
      
    </Container>
    <Footer />
    </>
  )
}

export default ContactPage
