const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');
//User Model
let {Manga} = require('../models/manga');
var {authenticate} = require('../middleware/authenticate');

/* GET register. */
router.get('/', function getHome(req, res, next) {
    res.render('create-manga',{title: 'Create'})
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

module.exports = router;
