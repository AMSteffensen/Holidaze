import React, { useEffect, useState } from "react"
import { BASE_URL, headers } from "../../constants/api"

export default () => {
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

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-center font-bold text-green-800 text-2xl mb-4">Messages</h1>
      <div className="flex flex-col space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex space-x-2 justify-items-stretch items-center"
          >
            <div
              className="flex bg-white justify-center items-center flex-col border-gray-600 border-2 rounded-lg p-2 text-sm"
              style={{ flex: 2 }}
            >
              <p>{message.name}</p>
              {/* <p>{message.email}</p> */}
            </div>
            <div className="flex-1 text-gray-700" style={{ flex: 6 }}>
              <p>"{message.message}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
