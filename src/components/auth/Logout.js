import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    function doLogout() {
        logout();
        history.push("/");
    }

    return <button onClick={doLogout}>Log out</button>;
}

export default Login;
