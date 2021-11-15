import React, {Component} from 'react';
import {Nav, Navbar, Form, FormControl, Button, Checkbox} from 'react-bootstrap';
import {HashRouter, Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import $ from 'jquery';
let parseDocumentCookie = () => {
    let finObj = {};
    document.cookie.split(';').map(function (c) {
        return c.trim().split('=').map(decodeURIComponent);
    }).reduce(function (a, b) {
        try {
            a[b[0]] = JSON.parse(b[1]);
        } catch (e) {
            a[b[0]] = b[1];
        }
        finObj = a;
        return a;
    }, {});
    return finObj;
}
let or = (one, two) => {
    return (one || two)
}

 window.run = function () {
    /**
     1. Extract code from the textbox;
     2. Send code to server;
     3. Save;
     4. Generate Link;
     5. Send user to Link;
     **/
    /** 1. Extract code from the textbox; **/
    let Title = $('#getTitle').val();
    let Code = $('#Code').val();
    /** 2. Send code to server; **/
    let username = ths.getUsername();
    let password = ths.getPassword();
    axios.post('https://server234.glitch.me/api/code', {
        username: username,
        password: password,
        title: Title,
        code: Code
    }).then(function (res) {
        window.location = res.data;
    }).catch(err => {
        console.error(err);
    })
}
window.edit = function () {
    let id = prompt(`Tell me the last numbers of your link`);
    /**
     1. Extract code from the textbox;
     2. Send code to server;
     3. Save;
     4. Generate Link;
     5. Send user to Link;
     **/
    /** 1. Extract code from the textbox; **/
    let Title = $('#getTitle').val();
    let Code = $('#Code').val();
    /** 2. Send code to server; **/
    let username = ths.getUsername();
    let password = ths.getPassword();
    axios.post('https://server234.glitch.me/api/code', {
        username: username,
        password: password,
        title: Title,
        code: Code,
        editing: true,
        id2: Number(id)
    }).then(function (res) {
        window.location = res.data;
    }).catch(err => {
        console.error(err);
    })
}
window.getCode = function () {
    let id = prompt(`Tell me the last numbers of your link`);
    /** 1. Extract code from the textbox; **/
    let Title = $('#getTitle').val();
    let Code = $('#Code').val();
    /** 2. Send code to server; **/
    let username = ths.getUsername();
    let password = ths.getPassword();
    let code;
    let title;
    axios.post('https://server234.glitch.me/api/getCode', {
        username: username,
        password: password,
        id2: Number(id)
    }).then(function (res) {
        code = res.data.code;
        title = res.data.title;
        document.getElementById('Code').innerHTML = code;
        document.getElementById('getTitle').value = title;
    }).catch(err => {
        console.error(err);
    })

}
window.deleteCode = function () {
    let id = prompt(`Tell me the last numbers of your link`);
    let username = ths.getUsername();
    let password = ths.getPassword();
    axios.post('https://server234.glitch.me/api/deleteCode', {
        username: username,
        password: password,
        id: Number(id)
    }).then(function (res) {
        if (res.data === 'ERR') {
            alert('This is not your game.');
        } else if (res.data === 'ERR1') {
            alert('Could not find what you wanted to be deleted.');
        } else {
            alert('Deleted successfully.');
        }
    }).catch(err => {
        console.error(err);
    })

}
let ths;
let store;
let cookies;
let opp = 0;

class Main extends Component {
    constructor(props) {
        super(props);
        ths = this;
        store = this.props.store;
    }

    logedIn(username) {
        if (username === null) {
            return false;
        } else {
            return true;
        }
    }

    getUsername() {
        if (store.getState() !== undefined) {
            if (store.getState().username === ('Stranger' || 'stranger')) {
                return undefined;
            }
            return store.getState().username;
        } else {
            return localStorage.getItem("username");
        }
    }

    getPassword() {
        if (store.getState() !== undefined) {
            if (store.getState().username === ('Stranger' || 'stranger')) {
                return undefined;
            }
            return store.getState().username;
        } else {
            console.log(localStorage.getItem("password"));
            return localStorage.getItem("password");
        }
    }

    start() {

    }

    handleClick(e) {
        ths.start();
        document.getElementById('spd').remove();
    }
    render() {
        if (this.logedIn(this.getUsername())) {
            window.username = this.getUsername();
            window.password = this.getPassword();
            return (
                <div style={{textAlign: 'center'}}>
                    <h2>Build</h2>
                    <hr/>
                    <h4>Title</h4>
                    <input type="text" id="getTitle"></input>
                    <h4>Copy and paste your HTML here</h4>
                    <br/>
                    <a href="javascript:window.getCode()"><Button bsStyle="success" bsSize="small" href="" id="editFile" target="_blank" >Get Code</Button></a>
                       <br/>
                        <br/>
                        <a href="javascript:window.deleteCode()"><Button bsStyle="success" bsSize="small" href="" id="editFile" target="_blank" >Delete Code</Button></a>
                    <br/>
                    <br/>
                    <textarea name="text" id="Code" cols="70" rows="20"></textarea>
                    <br/>
                    <a href="javascript:window.run()"><Button bsStyle="success" bsSize="small" href="" id="SumbitFile" target="_blank" >Sumbit</Button></a>
                    <br/>
                    <br/>
                    <a href="javascript:window.edit()"><Button bsStyle="success" bsSize="small" href="" id="editFile" target="_blank" >Edit</Button></a>
                    <div id="errPlace"></div>
                </div>

            )
        } else {
            return (
                <div style={{textAlign: 'center'}}>
                    <h2>Your not logged in!</h2>
                    <hr/>
                    <a href={`/#/login`}><Button bsStyle="success" bsSize="large" href="" target="_blank">Login</Button></a>
                </div>
            )
        }
    }
}

export default Main;
