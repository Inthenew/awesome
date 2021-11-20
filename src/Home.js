import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Home</h2>
                <hr />
                <h4>Welcome to my app</h4>
                <p style={{fontSize: '1rem'}}>jackm@slocum.io</p>
                <a href={`/#/signup`}><Button bsStyle="success" bsSize="large" href="" target="_blank">Signup</Button></a>{'        '}<a href={`/#/login`}><Button bsStyle="success" bsSize="large" href="" target="_blank">Login</Button></a>
            </div>
        );
    }
}
export default Home;
