'use strict';
var path = require('path');
var express = require('express');
let bodyParser = require('body-parser');
let axios = require('axios');
let cookieParser = require('cookie-parser');
let cookie = require('cookie')
var app = express();
app.use(cookieParser());
let server = require('http').createServer(app).listen(8080, function() {
    console.log('listening');
})
let users = [];
let sessions = [];
let games = [];
let number = 0;
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
//
app.get(`/api/games`, function (req, res) {
    return res.json(games);
})
app.post('/api/users', function (req, res) {
    let user = req.body.username;
    let pass = req.body.password;
    if (!req.body.sS) {
            users.push({
                username: user,
                password: pass
            });
            db.insertOne({class: 'pro', username: user, password: pass, games: []}, function (err, d) {
                if (err) throw err;
            })
    }
    return res.send('User has been added successfully');
})
app.post('/api/code', function (req, res) {
    let user = req.body.username;
    let pass = req.body.password;
    let title = req.body.title;
    let code = req.body.code;
    let sS = req.body.sS;
    let id = req.body.id;
    let editing = req.body.editing;
    let id2 = Number(req.body.id2);
    /** 3. save; **/
    if (sS !== true) {
        if (editing !== true) {
            var p = number + 1;
            number++;
            id2 = p;
            games.push({
                user: user,
                pass: pass,
                title: title,
                code: code,
                id: p
            });
            let mygames = [];
            for (let i = 0; i < games.length; i++) {
                if (games[i].user === user) {
                    mygames.push(games[i]);
                }
            }
            db.findOneAndUpdate({username: user}, {$set: {games: mygames}});
        } else {
            for (let j = 0; j < games.length; j++) {
                if (games[j].id === Number(id2) && games[j].user === user) {
                    games[j].title = title;
                    games[j].code = code;
                }
            }
            let mygames = [];
            for (let i = 0; i < games.length; i++) {
                if (games[i].user === user) {
                    mygames.push(games[i]);
                }
            }
            db.findOneAndUpdate({username: user}, {$set: {games: mygames}});
        }
    } else {
        var p = number + 1;
        number++;
        id2 = p;
        games.push({
            user: user,
            pass: pass,
            title: title,
            code: code,
            id: id
        });
    }
    /** 4. Generate Link; **/
    if (sS) {
        var link = `https://gbuild.netlify.app/games/${id}`;
        app.get(`/games/${id}`, function (req, res) {
            for (let j = 0; j < games.length; j++) {
                if (games[j].id === id) {
                    code = games[j].code;
                }
            }
            res.send(`${code}`);
        })
    } else {
        if (editing !== true) {
            var link = `https://gbuild.netlify.app/games/${number}`;
            app.get(`/games/${number}`, function (req, res) {
                for (let j = 0; j < games.length; j++) {
                    if (games[j].id === number) {
                        code = games[j].code;
                    }
                }
                res.send(`${code}`);
            })
        } else {
            var link = `https://gbuild.netlify.app/games/${number}`;
            app.get(`/games/${number}`, function (req, res) {
                for (let j = 0; j < games.length; j++) {
                    if (games[j].id === number) {
                        code = games[j].code;
                    }
                }
                res.send(`${code}`);
            })
        }
    }
    return res.send(link);
})
app.post('/api/getCode', function (req, res) {
    let user = req.body.username;
    let pass = req.body.password;
    let id = req.body.id2;
    let code;
    let title;
    for (let j = 0; j < games.length; j++) {
        if (games[j].id === id) {
            code = games[j].code;
            title = games[j].title;
        }
    }
    return res.send({
        code: code,
        title: title
    });
})
app.post('/api/getRes', function (req, res) {
    let user = req.body.username;
    let pass = req.body.password;
    let search = req.body.search;
    search = search.toLowerCase();
    let code;
    let title;
    let matchedGames= [];
    for (let j = 0; j < games.length; j++) {
        /** If 3 of the letters are the same, put on list; **/
        let lcnt = 0;
        for (let p = 0; p < games[j].title.length; p++) {
            let tl = games[j].title[p];
            tl = tl.toLowerCase();
            for (let o = 0; o < search.length; o++) {
                if (String(tl) === String(search[o])) {
                    lcnt++;
                }
            }
        }
        if (lcnt >= 4) {
            matchedGames.push(games[j]);
        }
    }
    return res.json(matchedGames);
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
            axios.post(`https://server234.glitch.me/api/users`, {
                username: doc.username,
                password: doc.password,
                sS: true,
                fS: true
            }).then(function (res) {
            }).catch((err) => {
                console.error(err);
            })
                for (let i = 0; i < doc.games.length; i++) {
                axios.post(`https://server234.glitch.me/api/code`, {
                    username: doc.username,
                    password: doc.password,
                    title: doc.games[i].title,
                    code: doc.games[i].code,
                    sS: true,
                    fS: false,
                    id: doc.games[i].id
                }).then(function (res) {
                }).catch((err) => {
                    console.error(err);
                })
            }
        }
    })
}
//

app.use(express.static(path.resolve('/Users/jackm/Desktop/myapp/', 'build')));
