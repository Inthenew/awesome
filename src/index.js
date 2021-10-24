import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { createStore } from 'redux';
import './bootsrapcss/bootstrap.css';
import './bootsrapcss/bootstrap-theme.css';
import './index.css';

let info = {
    username: undefined,
    password: undefined
}
let startState = (state = info, action) => {
    switch (action.type) {
        case 'Login':
            return {
                username: action.username,
                password: action.password
            }
            break;
        case 'Logout':
            return {
                username: undefined,
                password: undefined
            }
            break;
    }
}
let store = createStore(startState);

ReactDOM.render(<App store={store} />, document.getElementById('root'))