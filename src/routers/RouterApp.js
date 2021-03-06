
import React, {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from '../action/auth';



export const RouterApp = ({history}) => {
  

    const dispatch = useDispatch();

    console.log(history)

    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [checking, setchecking] = useState(true)

    useEffect(() => {
    

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user?.uid) {
            dispatch(login(user.uid, user.displayName))
            setisLoggedIn(true)
            
            // const uid = user.uid;
            // ...
          } else {
    
            setisLoggedIn(false)
            // User is signed out
            // ...
          }
          setchecking(false)
        });
    }, [])
    


    
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

