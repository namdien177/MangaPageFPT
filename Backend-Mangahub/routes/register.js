const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');
//User Model
let {User} = require('../models/user');
var {authenticate} = require('../middleware/authenticate');

/* GET register. */
router.get('/', function getHome(req, res, next) {
    if (req.session.login){
        res.redirect('./users/me');
    }else {
        res.render('register', { title: 'MangaHub - Register', errors: req.session.error });
    }
});

/* POST register*/
router.post('/', function (req, res, next) {
    var body = _.pick(req.body, ['truename', 'dob', 'gender', 'email', 'password']);
    var user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken(req.body.password);
    }).then((token) => {
        res.header('x-auth', token).send(user);
        res.redirect('./login');
    }).catch((e) => {
        res.status(400).send(e);
    })
});
router.post('/login', (req, res)=>{
    console.log('debug');
    var body = _.pick(req.body, ['email', 'password']);
    console.log(body.email,body.password);
    User.findByCredentials(body.email,body.password).then((user)=>{
        res.send(user);
    }).catch((e)=>{
        res.status(400).send();
    });
});
module.exports = router;
