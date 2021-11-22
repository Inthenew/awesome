import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
function convertToEnglish(search) {
    let result = search;
    let i = 0;
    while (i < search.length) {
        if (result[i] === "%" && result[i + 1] === "2" && result[i + 2] === "0") {
            /*Found %20 converting to <space>*/
            result = result.slice(0, i) + ' ' + result.slice(i + 3, result.length);
        }
        i++;
    }
    return result;
}
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

window.getResults = function () {
document.getElementById("shit").remove();
    let username = ths.getUsername();
    let password = ths.getPassword();
    let code;
    let title;
    axios.post('https://server234.glitch.me/api/getRes', {
        username: username,
        password: password,
        search: search
    }).then(function (res) {
        for (let i = 0; i < res.data.length; i++) {
            document.getElementById('reslts').innerHTML += `<div style="border-style: solid;  display: inline-block;  width: -moz-fit-content; width: fit-content; border-color: black;" ><a href="https://server234.glitch.me/games/${res.data[i].id}">${res.data[i].title}</h4><h6>Made by: ${res.data[i].user}</h6></a> </div>
            `;
        }
        if (res.data.length <= 0) {
            document.getElementById('reslts').innerHTML += `<h1>No Results</h1>`;
        }
    }).catch(err => {
        console.error(err);
    })

}
let search = convertToEnglish(document.URL.slice(location.protocol.length + 30, location.length));
let store;
let ths;
class Search extends Component {
    constructor (props) {
        super(props);
        this.state = { search: search };
        store = this.props.store;
        ths = this;
let hp2 = 0
        setInterval(() => {
            search = convertToEnglish(document.URL.slice(location.protocol.length + 30, location.length));
            if (this.state.search !== search) {
hp2++
setTimeout(function () {
if (hp2 >= 2) {
location.reload()
}
hp2 = 0
}, 200)
                this.setState(currState => ({ search: search }));
document.getElementById('reslts').innerHTML = '';
                window.getResults();
            }
        }, 100);
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
            return localStorage.getItem("password");
        }
    }
    logedIn(username) {
        if (username === null) {
            return false;
        } else {
            return true;
        }
    }
    render() {


        if (this.logedIn(this.getUsername())) {
            window.username = this.getUsername();
            window.password = this.getPassword();
            return (
                <div style={{textAlign: 'center'}}>
                    <h2>Search</h2>
                    <hr />

<a href="javascript:window.getResults()"><Button bsStyle="success" bsSize="large" href="" target="_blank" id="shit">Get Results</Button></a>
                    <div id="reslts"></div>
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
export default Search;
