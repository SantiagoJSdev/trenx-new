import React from 'react'
import { Provider } from 'react-redux'
import { RouterApp } from './routers/RouterApp'
import { store } from './store/store'






export const App = () => {
    return (
        <div>
            <Provider store={store}>
            <RouterApp/>
            </Provider>
        </div>
    )
}
