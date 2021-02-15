import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";

import App from './App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducers'
import thunk from 'redux-thunk';

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