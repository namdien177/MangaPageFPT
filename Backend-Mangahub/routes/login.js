var express = require('express');
var router = express.Router();
//<<<<<<< HEAD
//var app = express();
//let db = require('../DatabaseComps/DataConnection');        //      import database class
//=======
//let db = require('../DatabaseComps/DataConnection');        //      import database class
//>>>>>>> f35cc22f66676e9a124b6200f802bcd4ffb042f3

/* GET Login page */
/**
 * Trang mặc định được gọi.
 */
router.get('/', function(req, res, next) {
    res.render('login', {success: false, errors: req.session.error});
    req.session.error = null;
});


/* POST Login page */
/**
 * TODO: Viết lại hàm này phù hợp với mã hóa của Mạnh.
 * @param req
 * @param res
 * @param next
 */


/**
 * Post for login form. Lấy function từ trên.
 * TODO: Thiết kế trang login với biến: title, loginstatus, errormessage.
 */
router.post('/login', function (req, res, next) {
    console.log('begin checking')
    //  Check validation
    req.check('username', 'Your username is not in form of an email!').isEmail();
    req.check('password', 'Hey! Your password should have 6 - 20 character?.').isLength({min:6, max:20});

    var allerror = req.validationErrors();
    console.log(allerror);
    if (allerror){
        req.session.error = allerror;
        console.log('Got error');
        res.redirect('/');
    }else {
        //checking on serverside
        var username = req.body.username;
        var password = req.body.password;
        /*var errorAuth = db.checkLogin(username, password);
        if (errorAuth){
            req.session.error = 'Username or Password is incorrect!';
            res.redirect('/');
        }
        else {
            res.redirect('./');
        }*/
        console.log('no error');
        res.redirect('./');
    }
});


module.exports = router;
