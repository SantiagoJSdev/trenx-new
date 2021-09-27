

import React from 'react'

import '../styles/styles-principal.css'
import { NavBar } from './NavBar'
// import './img/'
// import { useDispatch, useSelector } from 'react-redux'
// import '../../styles/typo.css'

// import {startLogout} from '../../action/auth'


export const PrincipalScreen = () => {

    // console.log(db)

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
               <NavBar/>

            </div>



            <div className="container-2">

                <div className="parrafo"> Request A Service

                </div>
                <div className="flecha">

                    <div className="flecha1">
                        <div className="flecha1-logo"> <h1>10 OFF</h1>

                        </div>
                    </div>

                    <p className="flecha2">Sign up for free and receive a <span>10%</span> discount on all of our services,
                        including routine maintenance and any necessary installation</p>

                        <div className="flecha3">
                        <button className="flecha3-btn"><a href="/auth/register">REGISTER</a></button>

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
