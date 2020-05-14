import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";

function Nav() {
    const { user } = useContext(AuthContext);
    return (
        <div className="menu">
            <NavLink to="/" exact>
                Home
            </NavLink>

            {user ? (
                <>
                    <NavLink to="/admin">Admin</NavLink>
                    <Logout />
                </>
            ) : (
                <NavLink to="/register">Login</NavLink>
            )}
        </div>
    );
}

export default Nav;
