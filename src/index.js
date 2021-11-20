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
    password: undefined,
    cookies: 0,
}
let startState = (state = info, action) => {
    switch (action.type) {
        case 'Login':
            return {
                username: action.username,
                password: action.password,
                cookies: action.cookies,
            }
            break;
        case 'Logout':
            return {
                username: undefined,
                password: undefined,
                cookies: 0,
            }
            break;
    }
}
let store = createStore(startState);
var pone = false;
window.onload = function() { 
tee();
}
function tee() {
setTimeout(function () {
pone = true;
}, 1000)
document.getElementById('root').innerHTML = "<h1>Loading...</h1>";
axios.get('https://server234.glitch.me/api/test').then(function (res) {
    pss();
})
function pss() {
if (pone === true) {
location.reload();
}
    document.getElementById('root').innerHTML = "";
ReactDOM.render(<App store={store} />, document.getElementById('root'));
    document.getElementsByTagName('head').innerHTML += `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6301571459166160"
     crossorigin="anonymous"></script>`;
}
}
