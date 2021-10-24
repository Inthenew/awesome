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
let handleError = err => {
    document.getElementById('errContanier').innerHTML = String(err);
}
let handleSignup = (username, password, ths) =>  {
    axios.get(`/api/users`).then(function (res) {
        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].username === username) {
                handleError('username exists');
                return;
            }
        }
        //
        console.log(username);
        axios.post(`/api/users`, {
            username: username,
            password: password,
            sS: false,
            fS: true
        }).then(function (res) {
            axios.post(`/api/sessions`, {
                username: username,
                password: password
            }).then(function (res) {
                console.log('Success!');
                // signIn
                handleError('Your signed in');
                console.log(store);
                store.dispatch({type: 'Login', username: username, password: password});
                window.location = `${location.protocol}/#/main`
            }).catch(err => {
                console.error(err);
            })
        }).catch(err => {
            console.error(`Theres an err with checking if you are already loged in: ${err}`);
        })
        //
    }).catch((err) => {
        console.error(err);
    })
}
let store;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'stranger', password: 'unknown'};
        store = this.props.store;
    }
    onKeyDown(e) {
        if (e.keyCode === 13) {
            handleSignup(document.getElementById('username').value, document.getElementById('password').value, store);
        }
    }

    handleClick(e) {
        handleSignup(document.getElementById('username').value, document.getElementById('password').value, store);
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
