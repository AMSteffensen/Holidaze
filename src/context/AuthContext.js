import React, { createContext, useState } from "react"

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const existingUser = JSON.parse(localStorage.getItem("user")) || null

  const [user, setUser] = useState(existingUser)

  function registerUser({ username, password }) {
    localStorage.setItem("user", JSON.stringify({ username, password }))
    setUser({ username, password })
  }

  function isAuthenticated() {
    return user && user.authenticated
  }

  function login({ username, password }) {
    const existingUser = JSON.parse(localStorage.getItem("user")) || null
    if (
      existingUser &&
      existingUser.username === username &&
      existingUser.password === password
    ) {
      setUser({ username, password, authenticated: true })
      localStorage.setItem(
        "user",
        JSON.stringify({ username, password, authenticated: true })
      )
      return true
    } else {
      return false
    }
  }

  function logout() {
    const existingUser = JSON.parse(localStorage.getItem("user")) || null
    setUser({ ...existingUser, authenticated: false })
    localStorage.setItem(
      "user",
      JSON.stringify({ ...existingUser, authenticated: false })
    )
  }

  return (
    <AuthContext.Provider value={{ user, registerUser, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
