import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
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
let search = convertToEnglish(document.URL.slice(location.protocol.length + 29, location.length));
class Search extends Component {
    constructor (props) {
        super(props);
        this.state = { search: search };
        setInterval(() => {
            search = convertToEnglish(document.URL.slice(location.protocol.length + 29, location.length));
            if (this.state.search !== search) {
                this.setState(currState => ({ search: search }));
            }
        }, 100);
    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Search</h2>
                <hr />
                <h4>You searched: {search}</h4>
            </div>
        )
    }
}
export default Search;
