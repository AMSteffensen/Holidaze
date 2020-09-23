import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Logout from "../auth/Logout";

function Nav() {
  const {user} = useContext(AuthContext);
  return (
    <>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to='/' exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/About' exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' exact>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/hotels' exact>
                Hotels
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink to='/admin'>Admin</NavLink>
                </li>
                <li>
                  {" "}
                  <Logout />
                </li>
              </>
            ) : (
              <li>
                {" "}
                <NavLink to='/register'>Login</NavLink>
              </li>
            )}
          </ul>
        </nav>
    </>
  );
}

export default Nav;
