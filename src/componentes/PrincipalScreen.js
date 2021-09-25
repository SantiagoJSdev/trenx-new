

import React from 'react'
import '../styles/styles-principal.css'
// import './img/'
// import { useDispatch, useSelector } from 'react-redux'
// import '../../styles/typo.css'

// import {startLogout} from '../../action/auth'


export const PrincipalScreen = () => {

    // const {uid} = useSelector( state => state.auth );
    // console.log(uid)

    // const uid = true;


    // const dispatch = useDispatch();

    // const handleLogout=()=>{
    //     dispatch(startLogout())
    // }


    return (
        <>

            <div id="lol" className="container-1 primero">
                <nav className="nav-bar">
                    <div className="logo">
                        <img className="img" src={"./img/logo.png"} alt="img" />
                    </div>
                    <ul className="ul-1">
                        <li> <a href="/auth/login"> SERVICE  </a> </li>
                        <li> <a href="/auth/products"> PRODUCTS </a> </li>
                        <li> <a href="/auth/contact"> CONTACT </a> </li>
                        <li> <a href="/auth/career" > CAREER </a> </li>
                        <li> <a href="/auth/otros"> </a> </li>
                    </ul>

                    {/* <ul className="ul">
                  
                      <li> <a href="/auth/login"></a></li> 
                   
                      
                      
                      <li>    */}

                    <div className="dropdown ul">

                        <button className="dropdown-btn"><p id="p-3">ACCOUNT</p></button>


                        <div className="dropdown-content">
                            <a href="#">SING IN</a>
                            <a href="#">CREATE ACCOUNT</a>

                        </div>
                    </div>

                    {/* </li>
                  </ul> */}
                </nav>

            </div>



            <div className="container-2">

                <div className="parrafo"> hola

                </div>
                <div className="flecha">

                    <div className="flecha1">
                        <div className="flecha1-logo"> <h1>10 OFF</h1>

                        </div>
                    </div>

                    <p className="flecha2">Sign up for free and receive a <span>10%</span> discount on all of our services,
                        including routine maintenance and any necessary installation</p>

                        <div className="flecha3">
                        <button className="flecha3-btn"><a href="#lol">REGISTER</a></button>

                        </div>

                </div>


                <div className="caja-1">
                    <div className="caja pra div">
                    </div>
                </div>
                <footer className="footer">
                    <ul>
                        <li><a href="/auth/login">CONTACT</a></li>
                        <li><a href="/auth/login">TWITTER</a></li>
                        <li><a href="/auth/login">YOUTUBE</a></li>
                        <li><a href="/auth/login">LINKEDIN</a></li>
                        <li><a href="/auth/login">CAREERS</a></li>

                    </ul>
                </footer>

            </div>

        </>
    )
}
