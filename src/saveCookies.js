import React, {Component} from 'react';
import axios from 'axios';
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
let or = (one, two) => {
    return (one || two)
}
function saveCookies() {
    let getUsername = () => {
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
    let getPassword = () => {
        if (store.getState() !== undefined) {
            if (store.getState().username === ('Stranger' || 'stranger')) {
                return undefined;
            }
            return store.getState().username;
        } else {
            if (document.cookie.length > 0) {
                let info = parseDocumentCookie();
                let username = info.username;
                return info.password;
            } else {
                return undefined;
            }
        }
    }
    if (getUsername() !== undefined) {
        axios.post(`/api/cookies`, {
            username: getUsername(),
            password: getPassword(),
            cookies: 8
        }).then(function (res) {
        }).catch(err => {
            console.error(`There is an error in saving the cookies you clicked: ${err}`);
        })
    } else {
        alert('COCK')
    }
}
export default saveCookies;
