import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import $ from 'jquery';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  #c {
      margin-left: 5%;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  #form-center {
    position: absolute !important;
    left: 25%;
    top: 15px;
    right: 25%;
  }
`;
function onkeydown(e) {
    if (e.keyCode === 13) {
        /*search*/
        let search = document.getElementById('search').value;
        window.location = `${location.protocol}/#/search/${search}`;
    }
}
class TopBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Styles>
                <Navbar id="navbr" expand="exlg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <div id="form-center">
                        <FormControl type="text" placeholder="Search" className="" id="search" onKeyDown={onkeydown}/>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <hr/>
                        <Nav id="nav" className="ml-auto">
                            <Nav.Item>
                                <div className="co">
                                    <Nav.Link style={{fontSize: '1rem'}} className="coC" id="1" href="/#">Home</Nav.Link>
                                    <Nav.Link style={{fontSize: '1rem'}} className="coC" id="2" href="/#/signup">Signup</Nav.Link>
                                    <Nav.Link style={{fontSize: '1rem'}} className="coC" id="4" href="/#/login">Login</Nav.Link>
                                    <Nav.Link style={{fontSize: '1rem'}} className="coC" id="5" href="/#/logout">Logout</Nav.Link>
                                    <Nav.Link style={{fontSize: '1rem'}} className="coC" id="6" href="/#/main">Games</Nav.Link>
                                    <Nav.Link style={{fontSize: '1rem'}} id="7" href="/#/build">Build</Nav.Link>
                                </div>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}
export default TopBar;
/*
    <Navbar expand="lg">
      <div id="c">
      <Navbar.Brand href="/#"><img src={this.props.logoUrl} width="50" height="50"/></Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <div id="form-center">
        <FormControl type="text" placeholder="Search" className="" id="search" onKeyDown={onkeydown}/>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/#">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/#/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/#/login">Login</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/#/signup">Signup</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
*/
