import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/routes/ProtectedRoute"
//import components
import Home from "./components/home/Home"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Hotels from "./components/admin/Hotels"
import AddHotel from "./components/admin/AddHotel"
import EditHotel from "./components/admin/EditHotel"
import Dashboard from "./components/admin/Dashboard"
import Nav from "./components/layout/Nav"

import Establishment from "./components/establishment/Establishment"
import EstablishmentDetail from "./components/establishment/EstablishmentDetail"
import Contact from "./components/contact/Contact"

import "./styles/index.css"
import Messages from "./components/admin/Messages"
import Enquiries from "./components/admin/Enquiries"

function App() {
  return (
    <div className="bg-gray-200">
      <AuthContextProvider>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/hotels/:id" component={EstablishmentDetail} />
            <Route path="/hotels" exact component={Establishment} />
            <Route path="/contact" component={Contact} />
            <ProtectedRoute path="/admin" exact component={Dashboard} />
            <ProtectedRoute path="/admin/messages" exact component={Messages} />
            <ProtectedRoute path="/admin/enquiries" exact component={Enquiries} />
            <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
            <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
            <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EditHotel} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  )
}

export default App
