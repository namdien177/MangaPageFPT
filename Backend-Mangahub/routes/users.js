const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');
//User Model
let {User} = require('../models/user');
var {authenticate} = require('../middleware/authenticate');
//Register Form
router.post('/register', (req, res) => {

    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {

        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

router.get('/users/me', authenticate, (req, res) => {
    console.log('get inside')
    res.send(req.user);
});

module.exports = router;
