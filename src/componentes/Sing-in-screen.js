import React from 'react'
import '../styles/styles-sing-in.css'

export const SingInScreen = () => {
    return (
        <> 
            <div className ="container-sing-in">

                <div className="parte1">
                    <div className="container-img">
                     <img className="img2" src = {"../img/logo.png"} alt="img"/> 
                     </div>
                </div>

                <div className="parte2">

                <button className="Btn-sing-in btn-home"><a href="/">HOME</a></button>
                    <div className="caja-3">
                    
                        <p>Not a member? <a href="/auth/register"> Sign up now</a></p>
                    </div>


                    <div className="caja-2">

                        <div className="heading">
                                                <div className="Btn-sing-in">
                                                        <div 
                                                        className="google-btn"
                                                        >
                                                        <div className="google-icon-wrapper">
                                                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                                        </div>
                                                        <p className="btn-text">
                                                            <b>Sign in with google</b>
                                                        </p>
                                                        </div>
                                                        </div>
                            <button className="Btn-sing-in"></button>
                        </div>

                        <p className="or">OR</p>

                        <div className="box">
                        <p>Email</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Email"
                               name="email"
                               autoComplete="off"
                        
                            />
                        </div>
                    </div>

                    <div className="box">
                        <p>Password</p>
                        <div>
                            <input

                               type="password"
                               placeholder="Enter Your Password"
                               name="password"
                               autoComplete="off"
                        
                            />
                        </div>
                    </div>

                    <button className="Btn-sing-in btn-login">Login</button>

                 


                    </div>
                </div>

            </div>
        </>
    )
}
