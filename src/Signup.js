import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Checkbox } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
const Styles = styled.div`
    .form-center {
        position: absolute !important;
        left: 25%;
        right: 25%;
    }
`;
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
let handleError = err => {
    document.getElementById('errContanier').innerHTML = String(err);
}
let handleSignup = (username, password, ths) =>  {
    axios.get(`https://server234.glitch.me/api/users`).then(function (res) {
        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].username === username) {
                handleError('username exists');
                return;
            }
        }
        if (ths.logedIn(ths.getUsername())) {
            handleError('Your already logged in!');
            return;
        }
        //
        console.log(username);
        axios.post(`https://server234.glitch.me/api/users`, {
            username: username,
            password: password,
            sS: false,
            fS: true
        }).then(function (res) {
            axios.post(`https://server234.glitch.me/api/sessions`, {
                username: username,
                password: password
            }).then(function (res) {
                console.log('Success!');
                // signIn
                console.log(res)
                handleError('Your signed in');
                console.log(store);
                store.dispatch({type: 'Login', username: username, password: password, cookies: 0});
                window.location = `${location.protocol}/#/main`
            }).catch(err => {
                console.error(err);
            })
        }).catch(err => {
            console.error(`Theres an err with checking if you are already logged in: ${err}`);
        })
        //
    }).catch((err) => {
        console.error(err);
    })
}
let store;
let ths;
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'stranger', password: 'unknown'};
        ths = this;
        store = this.props.store;
    }
    onKeyDown(e) {
        if (e.keyCode === 13) {
            handleSignup(document.getElementById('username').value, document.getElementById('password').value, ths);
        }
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
    handleClick(e) {
        handleSignup(document.getElementById('username').value, document.getElementById('password').value, ths);
    }
render() {
    return (
        <Styles>
            <div>
                <div style={{textAlign: 'center'}}><h1>Signup:</h1>
                    <hr/>
                    <div className="form-center">
                        <FormControl type="text" placeholder="username" className="username" id="username" />
                        <FormControl type="password" placeholder="password" className="password" id="password" onKeyDown={this.onKeyDown}/>
                        <Button bsStyle="success" bsSize="lg" onClick={this.handleClick} onTouchStart={this.handleClick} block type="sumbit">Signup</Button>
                        <p id="errContanier"></p>
                    </div>
                </div>
            </div>
        </Styles>
    );
}
}
export default Signup;
