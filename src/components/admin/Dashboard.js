import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <ul>
                <li>
                    <NavLink to="/admin/hotels">List Hotels</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/hotels/add">Add Hotel</NavLink>
                </li>
            </ul>
        </>
    );
}

export default Dashboard;
