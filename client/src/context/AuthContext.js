import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const existingUser = localStorage.getItem("user") || null;

    const [user, setUser] = useState(existingUser);

    function registerUser(username) {
        localStorage.setItem("user", JSON.stringify(username));

        setUser(username);
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return <AuthContext.Provider value={{ user, registerUser, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
