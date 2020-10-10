import React, {useContext} from "react";
import {Link, NavLink, Redirect} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function Dashboard() {
  const {user} = useContext(AuthContext);
  return (
    <div className='p-4 text-green-800 h-screen'>
      <h1 className='text-3xl mb-4'>
        Welcome <span className='capitalize font-bold'>{user.username}!</span>
      </h1>
      <h2 className='text-xl font-bold mb-4'>Actions</h2>
      <Link to='/admin/hotels/add'>
        <button className='bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full mb-6'>
          Create new establishment
        </button>
      </Link>
      <button className='bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full'>
        See enquires
      </button>
    </div>
  );
}

export default Dashboard;
