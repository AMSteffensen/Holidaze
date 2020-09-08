import React from 'react'
import LoginButton from './forms/loginButton'

function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__inner">
                <li  className="nav__item">
                    <a className="nav__link nav__link--active" href="/react-intro">Home</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/react-intro">About</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/react-intro">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
