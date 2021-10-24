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
let ths;
let handleError = (err) => {
    document.getElementById('errContanier').innerHTML = String(err);
}
let handleLogin = (username, password, ths) => {
    axios.get(`/api/users`).then(function (res) {
        let i = 0;
        let aE = false;
        while (i < res.data.length) {
            if (res.data[i].username === username && res.data[i].password === password) {
                aE = true;
                break;
            }
            i++;
        }
        if (!aE) {
            handleError('Incorrect username or password');
            return;
        }
        //
        axios.get(`/api/sessions`).then(function (res) {
            let i = 0;
            console.log(res.data);
            while (i < res.data.length) {
                if (res.data[i].username === username && res.data[i].password === password) {
                    handleError(`Your already logged in!`);
                    store.dispatch({type: 'Login', username: username, password: password});
                    return;
                }
                i++;
            }
            axios.post(`/api/sessions`, {
                username: username,
                password: password
            }).then(function (res) {
                console.log('Success!');
                // signIn
                handleError('Your logged in');
                console.log(store);
                store.dispatch({type: 'Login', username: username, password: password});
                window.location = `${location.protocol}/#/main`;
            }).catch(err => {
                console.error(err);
            })
        }).catch(err => {
            console.error(err);
        })
    }).catch(err => {
        console.error(err);
    })
}
let store;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'stranger', password: 'unknown'};
        store = this.props.store;
        ths = this;
    }
    onKeyDown(e) {
        if (e.keyCode === 13) {
            handleLogin(document.getElementById('username').value, document.getElementById('password').value, store);
        }
    }

    handleClick(e) {
        handleLogin(document.getElementById('username').value, document.getElementById('password').value, store);
    }
    render() {
        return (
            <Styles>
                <div>
                    <div style={{textAlign: 'center'}}><h1>Login:</h1>
                        <hr/>
                        <div className="form-center">
                            <FormControl type="text" placeholder="username" className="username" id="username" />
                            <FormControl type="password" placeholder="password" className="password" id="password" onKeyDown={this.onKeyDown}/>
                            <Button bsStyle="success" bsSize="lg" onClick={this.handleClick} onTouchStart={this.handleClick} block type="sumbit">Login</Button>
                            <p id="errContanier"></p>
                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Login;