const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');
//User Model
let {User} = require('../models/user');
var {authenticate} = require('../middleware/authenticate');
//Register Form
router.post('/register', (req, res) => {
    res.redirect('./register');
});

router.get('/', (req, res) => {
    res.redirect('./users/me');
});

router.get('/me', authenticate, (req, res) => {
    if (req.session.login) res.send(req.user);
    else res.redirect('./login');
});

module.exports = router;
