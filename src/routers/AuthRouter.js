
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SingInScreen } from '../componentes/Sing-in-screen';
import { SingUpScreen } from '../componentes/sing-Up-Screen';





export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ SingInScreen }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ SingUpScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>

        </div>
    )
}
