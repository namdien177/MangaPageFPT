const express = require('express');
const router = express.Router();
const _ = require('lodash');
var login = require('./login');
const mongoose = require('mongoose');
var {User} = require('../models/user');

/* GET Login page */
/**
 * Trang mặc định được gọi.
 */


router.get('/', function(req, res, next) {
    res.render('login',{status: req.session.login, errors: req.session.error});
    req.session.error = null;
});


/* POST Login page */
/**
 * Post for login form. Lấy function từ trên.
 * TODO: Thiết kế trang login với biến: title, loginstatus, errormessage.
 */
router.post('/', function (req, res, next) {
    console.log(req.body.username);
    //  Check validation
    req.check('username', 'Your username is not in form of an email!').isEmail();
    req.check('password', 'Hey! Your password should have 6 - 20 character?.').isLength({min:6, max:20});

    var allerror = req.validationErrors();
    console.log('List error if has? - > '+allerror);

    // redirect depends on pre-validation
    if (allerror){
        req.session.error = allerror;
        req.session.login = false;
        console.log('Got error');
        res.redirect('/login');
    }else {
        //checking on serverside
        var username = req.body.username;
        var password = req.body.password;

        User.findByCredentials(username,password).then((user)=>{
            console.log('logged in -> saving token to session');
            req.session.token = user.tokens.token;
            console.log(user.tokens.token);
            req.session.login = true;
            req.session.error = allerror;
            console.log('no error');
            res.redirect('./');
        }).catch((rejectmessage)=>{
            req.session.token = null;
            req.session.login = false;
            req.session.error = rejectmessage;
            res.redirect('./login');
        });
    }
});

//Post Login Remake

router.post('/login',(req,res)=>{
    var body = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email,body.password).then((user)=>{
        return user.generateAuthToken(body.password).then((token)=>{
            res.header('x-auth', token).send(user);
        });
    }).catch((e)=>{
        res.status(400).send();
    });
});


module.exports = router;
