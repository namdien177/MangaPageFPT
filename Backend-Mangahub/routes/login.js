var express = require('express');
var router = express.Router();
var fs = require('fs');
let db = require('../DatabaseComps/DataConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

/**
 * Post for login form.
 */
function loginFunct(req, res, next) {
    //receive information
    let username = req.body.username;
    let password = req.body.password;
    let saveuser = req.body.rememberme;

    //checking on server
    db.loginstatus(username,password, (err,rec)=>{
        if (err){
            req.session.username = false;
            res.render('/', { title: 'Login', loginstatus: req.session.username, errormessage: 'There is something' +
                'wrong with our database/server. We are sorry for this incontinent.'}); //return login page with error message
        }else {
            if(rec.length >0){
                req.session.username = true;
                res.render('index', { title: 'MangaHub - Home', loginstatus: req.session.username}); //return homepage
            }else{
                req.session.username = false;
                res.render('/', { title: 'Login', loginstatus: req.session.username, errormessage: 'It seems like' +
                    'you entered wrong username/password. Please try again.'}); //return login page with error message
            }
        }
    });
}

router.post('/logged-in', loginFunct);


module.exports = router;
