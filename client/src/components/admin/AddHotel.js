import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {BASE_URL, headers} from "../../constants/api";

function AddHotel() {
  const {register, handleSubmit} = useForm();

  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";

    const options = {headers, method: "POST", body: JSON.stringify(data)};

    await fetch(url, options);

    history.push("/admin/hotels");
  }

  return (
    <form
      className='p-4 text-green-800 h-screen'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className='text-2xl text-center font-bold'>Add New Establishment</h1>
      <div className='flex flex-col flex-1 mb-4'>
        <label>Name</label>
        <input
          ref={register}
          name='name'
          className='py-3 px-2 rounded-lg shadow-xl'
          type='text'
          placeholder='Enter a name for the Hotel'
        ></input>
      </div>
      <div className='flex flex-col flex-1 mb-4'>
        <label>Image</label>
        <input
          ref={register}
          name='image'
          className='py-3 px-2 rounded-lg shadow-xl'
          type='text'
          placeholder='URL of the image'
        ></input>
      </div>
      <div className='flex flex-col flex-1 mb-4'>
        <label>Contact</label>
        <input
          ref={register}
          name='email'
          className='py-3 px-2 rounded-lg shadow-xl'
          type='email'
          placeholder='Contact email address'
        ></input>
      </div>
      <div className='flex space-x-2 mb-8'>
        <div className='flex flex-1 flex-col'>
          <label>Price</label>
          <input
            ref={register}
            name='price'
            className='py-3 px-2 rounded-lg shadow-xl w-full'
            type='text'
            placeholder='Rate per day'
          ></input>
        </div>
        <div className='flex flex-1 flex-col'>
          <label>Max Guests</label>
          <input
            ref={register}
            name='maxGuests'
            className='py-3 px-2 rounded-lg shadow-xl w-full'
            type='text'
            placeholder='Maximum Guests'
          ></input>
        </div>
      </div>
      <button
        className='bg-red-700 shadow-md px-2 py-3 text-white rounded-lg uppercase w-full'
        type='submit'
      >
        Add
      </button>
    </form>
  );
}

export default AddHotel;
