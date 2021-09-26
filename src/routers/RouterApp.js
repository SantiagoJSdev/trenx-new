
import React, {  useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { PrincipalScreen } from '../componentes/PrincipalScreen';
import { RequestServiceScreen } from '../componentes/RequestServiceScreen';
import { ServiceScreen } from '../componentes/ServiceScreen';
import { AuthRouter } from './AuthRouter';
// import '../styles/styles.principal.css'





export const RouterApp = () => {
  



    const [checking, setchecking] = useState(false)


    
    if (checking) {

    return (
    <h1>Loading</h1>
    )
}



    return (
        <Router>
            <>
                <Switch>

                    <Route
                    
                        path="/auth"
                        component={ AuthRouter }
                        // isAuthenticated={isLoggedIn}
                    />

                    <Route 
                        exact
                        path="/"
                        component={ PrincipalScreen }
                        // isAuthenticated={isLoggedIn}
                    />

                    <Route 
                    exact
                    path="/service"
                    component={ ServiceScreen }
                        // isAuthenticated={isLoggedIn}
                    />

<Route 
                    exact
                    path="/contact"
                    component={ RequestServiceScreen }
                        // isAuthenticated={isLoggedIn}
                    />

                   
                    
                     <Redirect to="/" />
                 
                    


                </Switch>
            </>
        </Router>
    )
}

