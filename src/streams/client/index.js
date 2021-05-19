import React from 'react'
import App from './components/App'

import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware()))

function index()
{
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default index
