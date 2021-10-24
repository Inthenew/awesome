'use strict';
var path = require('path');
var express = require('express');
let bodyParser = require('body-parser');
let axios = require('axios');
let cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
let server = require('http').createServer(app).listen(8080, function() {
    console.log('listening');
})
let users = [];
let sessions = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    res.sendFile(path.join('/Users/jackm/Desktop/myapp/', 'build', 'index.html'));
})
app.get('/api/users', function (req, res) {
    return res.json(users);
})
app.get(`/api/sessions`, function (req, res) {
    return res.json(sessions);
})
app.post('/api/users', function (req, res) {
    let user = req.body.username;
    let pass = req.body.password;
    if (!req.body.sS) {
        users.push({
            username: user,
            password: pass
        });
        db.insertOne({class: 'pro', username: user, password: pass}, function (err, d) {
            if (err) throw err;
        })
    }
    return res.send('User has been added successfully');
})
let second = () => {
    return 1000;
}
let minute = () => {
    return second() * 60;
}
let hour = () => {
    return minute() * 60;
}
let day = () => {
    return hour() * 24;
}
let week = () => {
    return day() * 7;
}
let month = () => {
    /*30 days*/
    return (week() * 4) + (day() * 2);
}
let year = () => {
    return day() * 365;
}
app.post(`/api/sessions`, function (req, res) {
    sessions.push({ username: req.body.username, password: req.body.password });
    res.cookie('username', req.body.username, {maxAge: day() / 2, httpOnly: false });
    res.cookie('password', req.body.password, {maxAge: day() / 2, httpOnly: false });
    return res.send('We have added the user token successfully');
})
app.delete(`/api/sessions`, function (req, res) {
    let name = req.body.username;
    let pass = req.body.password;
    sessions.splice(sessions.indexOf({username: name, password: pass}), 1);
    res.clearCookie('username');
    res.clearCookie('password');
    return res.send('We have deleted the user token successfully');
})
let MongoClient = require('mongodb').MongoClient;
let db = null;
MongoClient.connect('mongodb+srv://Jack:Ilovedaddy9@cluster238.mbgnw.mongodb.net/buck?retryWrites=true&w=majority', function (err, client) {
    if (err) throw err;
    db = client.db('Awesome2').collection('Awesome');
    done2(db);
})
function done2(db) {
db.find({class: 'pro'}).toArray((err, result) => {
    if (err) throw err;
    for (let i = 0; i < result.length; i++) {
        let doc = result[i];
        users.push({username: doc.username, password: doc.password});
        axios.post(`http://localhost:3000/api/users`, {
            username: doc.username,
            password: doc.password,
            sS: true,
            fS: true
        }).then(function (res) {
        }).catch((err) => {
            console.error(err);
        })
    }
})
}
app.use(express.static(path.resolve('/Users/jackm/Desktop/myapp/', 'build')));
