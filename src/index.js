import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";

import App from './App';
import { Provider } from 'react-redux';
// import { compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducers'
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

// Remove console log in production mode
if(process.env.NODE_ENV === "production")
{
    console.log = function(){}; 
}

// ====== Redux Thunk ONLY -- START ====== //
const store = createStore(Reducer, applyMiddleware(thunk));
// ====== Redux Thunk ONLY -- END ====== //

// Redux DevTools (https://github.com/zalmoxisus/redux-devtools-extension):
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
    
// ====== END Redux DevTools

// const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();