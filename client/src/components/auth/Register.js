import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import ConfirmationModal from "../modal/ConfirmationModal";

function Register() {
  const {register, handleSubmit} = useForm();
  const {registerUser} = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  function onSubmit(credentials) {
    console.log("data", credentials);
    registerUser(credentials);
    setOpen(true);
  }

  return (
    <>
      <ConfirmationModal
        message='Registration successful'
        open={open}
        onClose={() => {
          setOpen(false);
          history.push("/login");
        }}
      />
      <form
        className='flex flex-col h-screen p-4 text-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='font-bold mb-6 text-xl'>Register</h2>
        <div className='flex flex-col mb-4'>
          <label>Username</label>
          <input
            className='py-3 px-2 rounded-lg shadow-xl'
            type='text'
            name='username'
            ref={register}
          ></input>
        </div>
        <div className='flex flex-col mb-4'>
          <label>Password</label>
          <input
            className='py-3 px-2 rounded-lg shadow-xl'
            type='password'
            name='password'
            ref={register}
          ></input>
        </div>
        <div className='flex justify-center mb-4'>
          <button
            className='bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-32'
            ref={register}
          >
            Submit
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to='/login'>
            <span className='text-bold'>Login.</span>
          </Link>
        </p>
      </form>
    </>
  );
}

export default Register;
