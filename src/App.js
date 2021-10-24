import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import TopBar from './TopBar.js';
import Signup from './Signup.js';
import Login from './Login.js';
import Logout from './Logout.js';
import Main from './Main.js';
import Home from './Home.js';
import Search from './Search.js';
class App extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return (
        <HashRouter> <div>
<TopBar></TopBar>
            <Route path="/signup"><Signup store={this.props.store}></Signup></Route>
            <Route path="/main"><Main store={this.props.store}></Main></Route>
            <Route path="/login"><Login store={this.props.store}></Login></Route>
            <Route path="/logout"><Logout store={this.props.store}></Logout></Route>
            <Route path="/search"><Search store={this.props.store}></Search></Route>
            <Route exact path="/"><Home /></Route>
        </div> </HashRouter>
    );
}
}
export default App;
