import React from "react"
import { useForm } from "react-hook-form"
import { useRouteMatch } from "react-router-dom"
import { BASE_URL, headers } from "../../constants/api"
import useConfirmationModal from "../../hooks/useConfirmationModal"
import ConfirmationModal from "../modal/ConfirmationModal"
import Container from '@material-ui/core/Container';

export default ({ open, onClose }) => {
  let match = useRouteMatch()
  const { register, handleSubmit } = useForm()
  const [cMOpen, openModal, onConfirmationModalClose] = useConfirmationModal(onClose)
  const onSubmit = async (data) => {
    console.log("data", data)
    const name = data.firstName + " " + data.lastName
    const url = BASE_URL + "enquiries"
    await fetch(url, {
      headers,
      method: "POST",
      body: JSON.stringify({
        ...data,
        name,
        establishmentId: match.params.id,
      }),
    })
    openModal()
  }
  return (
    <>
      <ConfirmationModal
        message="Yur enquiry has been submitted successfully!"
        open={cMOpen}
        onClose={onConfirmationModalClose}
      />
      <div
        className={`bg-gray-200 w-full min-h-screen z-40 top-0 p-4 ${
          open ? "fixed" : "hidden"
        }`}
      >
        <h2 className="text-center font-bold mb-6 text-xl">Add Booking</h2>
        <button
          className="absolute w-10 h-10 text-black flex justify-center items-center"
          onClick={onClose}
          style={{ right: 15, top: 15 }}
        >
          <i className="fa fa-close"></i>
        </button>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-2 mb-4">
            <div className="flex flex-1 flex-col">
              <label>First Name</label>
              <input
                name="firstName"
                className="py-3 px-2 rounded-lg shadow-xl w-full"
                type="text"
                ref={register}
              ></input>
            </div>
            <div className="flex flex-1 flex-col">
              <label>Last Name</label>
              <input
                name="lastName"
                className="py-3 px-2 rounded-lg shadow-xl w-full"
                type="text"
                ref={register}
              ></input>
            </div>
          </div>
          <div className="flex flex-col flex-1 mb-4">
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              className="py-3 px-2 rounded-lg shadow-xl"
              type="text"
              ref={register}
            ></input>
          </div>
          <div className="flex flex-col flex-1 mb-4">
            <label>Email</label>
            <input
              name="email"
              className="py-3 px-2 rounded-lg shadow-xl"
              type="email"
              ref={register}
            ></input>
          </div>
          <div className="flex flex-1 flex-col mb-4">
            <label>Start Date</label>
            <input
              name="checkIn"
              className="py-3 px-2 rounded-lg bg-white shadow-xl w-full"
              type="date"
              ref={register}
            ></input>
          </div>
          <div className="flex flex-1 flex-col mb-4">
            <label>End Date</label>
            <input
              name="checkOut"
              className="py-3 px-2 rounded-lg bg-white shadow-xl w-full"
              type="date"
              ref={register}
            ></input>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg uppercase w-32">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
