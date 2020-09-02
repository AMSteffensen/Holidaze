import React from 'react'

function Navigation() {
    return (
        <nav class="nav">
            <ul class="nav__inner">
                <li  class="nav__item">
                    <a class="nav__link nav__link--active" href="/react-intro">Home</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="/react-intro">About</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="/react-intro">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
