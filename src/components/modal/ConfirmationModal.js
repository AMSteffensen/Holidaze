import React, { useEffect } from "react"

export default ({ open, message, onClose }) => {
  useEffect(() => {
    let timer
    if (open) {
      timer = setTimeout(onClose, 3000)
    }
    return () => open && clearTimeout(timer)
  }, [open, onClose])
  return (
    <div
      className={`flex justify-center items-center bg-gray-900 bg-opacity-75 w-screen h-screen z-50 top-0 p-4 ${
        open ? "fixed" : "hidden"
      }`}
    >
      <div className="bg-gray-200 p-4 text-green-700 text-center py-8 px-4">
        <i className="fa fa-check text-5xl"></i>
        <h2 className="text-center font-bold mb-6 text-xl">Confirmation</h2>
        <p>{message}</p>
      </div>
    </div>
  )
}
