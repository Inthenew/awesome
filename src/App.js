import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';
import TopBar from './TopBar.js';
import Signup from './Signup.js';
import Login from './Login.js';
import Logout from './Logout.js';
import Main from './Main.js';
import Home from './Home.js';
import Search from './Search.js';
import Build from './Build.js'
let ths;
let store;
class App extends Component {
    constructor(props) {
        super(props);
        ths = this;
        store = this.props.store;
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
            <Route path="/build"><Build store={this.props.store}></Build></Route>
            <Route exact path="/"><Home /></Route>
        </div> </HashRouter>
    );
}
}
export default App;
