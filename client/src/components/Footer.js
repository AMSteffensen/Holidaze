import React from 'react'

function Footer() {
    return (
        <footer className="footer">
        <div className="footer__item">
           <div className="email-form">
                <input className="email-form__input" placeholder="email" type="text"/>
                <button className="email-form__button">Signup</button>
           </div>
        </div>
           <div className="footer__item">
            Copyright 2020
           </div>
           <div className="footer__item">
            <div>
                <a href="/">Terms</a> - <a href="/">Privacy Policy</a>
            </div>
           </div>
        </footer>
    )
}

export default Footer
