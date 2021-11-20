import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { createStore } from 'redux';
import $ from 'jquery';
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
let r = (js) => {
    document.getElementById('basic-navbar-nav').style.marginLeft = '5%';
    document.getElementById('navbr').style.backgroundColor = 'gray';
    document.getElementById('navbr').style.textAlign = 'center';
    $('.co').css({
        whiteSpace: 'norap',
        overflowY: 'hidden',
        marginLeft: '-6%'

    })
    $('.coC').css({
        display: 'inline-block',
        width: '50px',
        height: '100%'
    })
    $('#6').css({
        display: 'inline-block',
        width: '63px',
        height: '100%'
    })
    $('#7').css({
        display: 'inline-block',
        height: '100%'
    })
}
setTimeout(() => {
    r(true);
}, 400);
ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
}
