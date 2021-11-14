import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Checkbox } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';
const Styles = styled.div`
 .modal {
                display: none; /* Hidden by default */
                position: fixed; /* Stay in place */
                z-index: 1; /* Sit on top */
                padding-top: 10rem; /* Location of the box */
                left: 0;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgb(0,0,0); /* Fallback color */
                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
              }

              /* Modal Content */
              .modal-content {
                background-color: #fefefe;
                margin: auto;
                padding: 4rem;
                border: 0.1rem solid #888;
                width: 80%;
                height: 40%;
                text-align: center;
              }

              /* The Close Button */
              .close {
                color: #aaaaaa;
                float: right;
                font-size: 2.8rem;
                font-weight: bold;
              }

              .close:hover,
              .close:focus {
                color: #000;
                text-decoration: none;
                cursor: pointer;
              }
              #content {
                color: darkred;
              }
`;
let ths;
let store;
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
class Logout extends Component {
    constructor(props) {
        super(props);
        ths = this;
        store = this.props.store;
    }
    handleText(text) {
        $('#content').text(String(text));
    }
    getUsername() {
        if (store.getState() !== undefined) {
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
            return store.getState().username;
        } else {
            if (document.cookie.length > 0) {
                let info = parseDocumentCookie();
                let username = info.username;
                let password = info.password;
                console.log(password)
                return password;
            } else {
                return undefined;
            }
        }
    }

    parseDocumentCookie() {
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
    logOut() {
        /*Logout*/
        if (ths.getUsername() !== undefined) {
            axios.delete(`https://server234.glitch.me/api/sessions`, {
                username: ths.getUsername(),
                password: ths.getPassword()
            }).then(function (res) {
                store.dispatch({type: 'Logout'});

                ths.handleText('Logged out successfully');
            }).catch(err => {
                ths.handleText('There has been an error');
                console.error(err);
            })
        } else {
        }
    }
    f (e) {
        let modal = document.getElementById("myModal");
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        window.ontouchstart = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        document.getElementById("myModal").style.display = "block";
    }
    render() {
        return (
            <Styles>
                <div style={{textAlign: 'center'}}>
                    <h2>Logout</h2>
                    <hr />
                    <Button bsStyle="success" id="delete" bsSize="large" onClick={this.f} onTouchStart={this.f}  href="" target="_blank">Logout</Button>
                    <div id="prompt">
                        <div id="myModal" className="modal">
                            <div className="modal-content">
                                <Button bsStyle="success" bsSize="small" href="" onClick={this.logOut} onTouchStart={this.logOut} target="_blank" id="sure" className="send">are you sure you want to logout?</Button>
                                <p id="content"></p>
                            </div>

                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Logout;
