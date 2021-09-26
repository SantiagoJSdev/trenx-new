import React from 'react'

export const NavBar = () => {
    return (
        <>
             <nav className="nav-bar">
                    <div className="logo">
                        <img className="img" src={"./img/logo.png"} alt="img" />
                    </div>
                    <ul className="ul-1">
                        <li> <a href="/service"> SERVICE  </a> </li>
                        <li> <a href="/auth/products"> PRODUCTS </a> </li>
                        <li> <a href="/contact"> CONTACT </a> </li>
                        <li> <a href="/auth/career" > CAREER </a> </li>
                        <li> <a href="/auth/otros"> </a> </li>
                    </ul>
                    <div className="dropdown ul">
                        <button className="dropdown-btn"><p id="p-3">ACCOUNT</p></button>
                        <div className="dropdown-content">
                            <a href="/auth/login">SING IN</a>
                            <a href="/auth/register">CREATE ACCOUNT</a>
                        </div>
                    </div>
                </nav>
        </>
    )
}
