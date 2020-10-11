import React from 'react';


export default ({ open, onClose }) => {

    return <div className={`bg-gray-200 w-full h-screen z-40 top-0 p-4 ${open ? 'absolute' : 'hidden'}`}>
        <h2 className="text-center font-bold mb-6 text-xl">Add Booking</h2>
        <button className="absolute w-10 h-10 text-black flex justify-center items-center" onClick={onClose} style={{ right: 15, top: 15 }}><i className="fa fa-close"></i></button>
        <form className="flex flex-col">
            <div className="flex space-x-2 mb-4">
                <div className="flex flex-1 flex-col">
                    <label>First Name</label>
                    <input name="firstName" className="py-3 px-2 rounded-lg shadow-xl w-full" type="text"></input>
                </div>
                <div className="flex flex-1 flex-col">
                    <label>Last Name</label>
                    <input name="lastName" className="py-3 px-2 rounded-lg shadow-xl w-full" type="text"></input>
                </div>
            </div>
            <div className="flex flex-col flex-1 mb-4">
                <label>Phone Number</label>
                <input name="phoneNumber" className="py-3 px-2 rounded-lg shadow-xl" type="text"></input>
            </div>
            <div className="flex flex-col flex-1 mb-4">
                <label>Email</label>
                <input name="email" className="py-3 px-2 rounded-lg shadow-xl" type="email"></input>
            </div>
            <div className="flex flex-1 flex-col mb-4">
                <label>Start Date</label>
                <input name="startDate" className="py-3 px-2 rounded-lg shadow-xl bg-white w-full" type="date"></input>
            </div>
            <div className="flex flex-1 flex-col mb-4">
                <label>End Date</label>
                <input name="endDate" className="py-3 px-2 rounded-lg shadow-xl bg-white w-full" type="date"></input>
            </div>
            <div className="flex justify-center">
                <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg uppercase w-32">Book Now</button>
            </div>
        </form>
    </div>
}