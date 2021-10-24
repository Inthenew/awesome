import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Checkbox } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
let parseDocumentCookie = () => {
    let finObj = {};
    document.cookie.split(';').map(function(c) {
        return c.trim().split('=').map(decodeURIComponent);
    }).reduce(function(a, b) {
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
let ths;
let store;
class Main extends Component {
    constructor(props) {
        super(props);
        ths = this;
        store = this.props.store;
    }
    logedIn(username) {
        if (username === undefined) {
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
            if (document.cookie.length > 0) {
                let info = parseDocumentCookie();
                let username = info.username;
                let password = info.password;
                return username;
            } else {
                return undefined;
            }
        }
    }
    getPassword() {
        if (store.getState() !== undefined) {
            if (store.getState().username === ('Stranger' || 'stranger')) {
                return undefined;
            }
            return store.getState().username;
        } else {
            if (document.cookie.length > 0) {
                let info = parseDocumentCookie();
                let username = info.username;
                let password = info.password;
                return password;
            } else {
                return undefined;
            }
        }
    }
render() {
    if (this.logedIn(this.getUsername())) {
        window.username = this.getUsername();
        window.password = this.getPassword();
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Main</h2>
                <hr/>
                <h3>Hello {window.username}</h3>
            </div>
        )
    } else {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Your not logged in!</h2>
                <hr />
                <a href={`/#/login`}><Button bsStyle="success" bsSize="large" href="" target="_blank">Login</Button></a>
            </div>
        )
    }
}
}
export default Main;
