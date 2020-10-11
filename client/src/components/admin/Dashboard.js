import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BASE_URL, headers } from "../../constants/api"
import { AuthContext } from "../../context/AuthContext"

function Dashboard() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const fetchMessages = async () => {
      const url = BASE_URL + "contacts"
      const data = await (await fetch(url, { headers })).json()
      console.log("data", data)
      setMessages(data)
    }
    fetchMessages()
  }, [])
  const { user } = useContext(AuthContext)
  return (
    <div className="p-4 text-green-800 min-h-screen">
      <h1 className="text-3xl mb-4">
        Welcome <span className="capitalize font-bold">{user.username}!</span>
      </h1>
      <Link to="/admin/messages">
        <p>
          You have{" "}
          <span className="underline font-semibold">{messages.length} messages.</span>
        </p>
      </Link>
      <h2 className="text-xl font-bold mb-4">Actions</h2>
      <Link to="/admin/hotels">
        <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full mb-6">
          View establishments
        </button>
      </Link>
      <Link to="/admin/hotels/add">
        <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full mb-6">
          Create new establishment
        </button>
      </Link>
      <Link to="/admin/enquiries">
        <button className="bg-red-700 shadow-md px-2 py-3 text-white rounded-lg w-full">
          See enquiries
        </button>
      </Link>
    </div>
  )
}

export default Dashboard
