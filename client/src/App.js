import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hotels from "./components/admin/Hotels";
import AddHotel from "./components/admin/AddHotel";
import EditHotel from "./components/admin/EditHotel";
import Dashboard from "./components/admin/Dashboard";
import Nav from "./components/layout/Nav";

// pages
import AboutPage from './pages/AboutPage';
import HotelPage from './pages/HotelPage';
import HotelDetailsPage from './pages/HotelDetailsPage';
import ContactPage from './pages/ContactPage';

import "./sass/main.scss";

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Nav />
                <Container>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/hotels" component={HotelPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/hotels-detail/:id" component={HotelDetailsPage} />
                        <ProtectedRoute path="/admin" exact component={Dashboard} />
                        <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
                        <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
                        <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EditHotel} />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
