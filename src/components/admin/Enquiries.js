import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BASE_URL, headers } from "../../constants/api"

export default () => {
  const [enquiries, setEnquiries] = useState([])
  const [establishments, setEstablishments] = useState([])
  useEffect(() => {
    const fetchEstablishments = async () => {
      const url = BASE_URL + "establishments"
      const data = await (await fetch(url, { headers })).json()
      setEstablishments(data)
    }
    const fetchEnquiries = async () => {
      const url = BASE_URL + "enquiries"
      const data = await (await fetch(url, { headers })).json()
      setEnquiries(data)
    }
    fetchEnquiries()
    fetchEstablishments()
  }, [])

  const deleteEnquiry = async (id) => {
    const url = BASE_URL + `enquiries/${id}`
    await fetch(url, {
      method: "DELETE",
      headers,
    })
    const updatedEnquiries = enquiries.filter(({ id: eId }) => eId !== id)
    setEnquiries(updatedEnquiries)
  }

  const getEstablishment = (id) =>
    establishments.find(({ id: eId }) => eId === id)?.name || id

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-center font-bold text-green-800 text-xl mb-4">Enquiries</h1>
      <div className="w-full overflow-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Establishment</th>
              <th className="px-4 py-2">Check-In</th>
              <th className="px-4 py-2">Check-Out</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {enquiries.map(({ id, name, email, establishmentId, checkIn, checkOut }) => (
              <tr key={id}>
                <td className="px-4 py-2">{name}</td>
                <td className="px-4 py-2">{email}</td>
                {establishmentId !== getEstablishment(establishmentId) ? (
                  <Link to={`/hotels/${id}`}>
                    <td className="px-4 py-2 underline font-semibold">
                      {getEstablishment(establishmentId)}
                    </td>
                  </Link>
                ) : (
                  <td className="px-4 py-2">{getEstablishment(establishmentId)}</td>
                )}
                <td className="px-4 py-2">{new Date(checkIn).toLocaleDateString()}</td>
                <td className="px-4 py-2">{new Date(checkOut).toLocaleDateString()}</td>
                <td className="px-4 py-2">
                  <button className="" onClick={() => deleteEnquiry(id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
