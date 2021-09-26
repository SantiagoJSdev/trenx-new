import React from 'react'
import '../styles/styles-request.css'

export const RequestServiceScreen = () => {
    return (
        <div>
            <div className="container-request">

                <div className="mitad1">
                    <div className="container-img">
                        <img className="img2" src={"../img/logo.png"} alt="img" />
                    </div>
                </div>

                <div className="mitad2">
                    <div className="requestBox">
                        <h3> Request A Service </h3>

                        <div className="box">
                        <p>Name</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Name"
                               name="name"
                               autoComplete="off"
                        
                            />
                        </div>
                        </div>
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
                        <p>Phone</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Phone"
                               name="phone"
                               autoComplete="off"
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>Message</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Message"
                               name="message"
                               autoComplete="off"
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>Street Address</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Street Address"
                               name="street"
                               autoComplete="off"
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>City</p>
                        <div>
                            <input

                               type="text"
                               placeholder="City"
                               name="city"
                               autoComplete="off"
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>Region/State/Province</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Region/State/Province"
                               name="region"
                               autoComplete="off"
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>Postal/Zip Code</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Postal/Zip Code"
                               name="postal"
                               autoComplete="off"
                        
                            />
                        </div>
                        </div>
                        <button className="btn-request btn-sumit"><a href="/">Sumit</a></button>
                    </div>

                    <button className="btn-request btn-home1"><a href="/">HOME</a></button>
                  
                </div>
            </div>
        </div>
    )
}
