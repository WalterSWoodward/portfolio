import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";

import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducers'
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === "production") {
    console.log = function(){}; 
}

const store = createStore(Reducer, applyMiddleware(thunk));

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