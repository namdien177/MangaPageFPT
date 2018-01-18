var express = require('express');
var router = express.Router();

/* GET Login page */
/**
 * Trang mặc định được gọi.
 */
router.get('/', function(req, res, next) {
    res.render('login', {success: req.session.loginauth, errors: req.session.error});
    req.session.error = null;
});


/* POST Login page */
/**
 * Post for login form. Lấy function từ trên.
 * TODO: Thiết kế trang login với biến: title, loginstatus, errormessage.
 */
router.post('/', function (req, res, next) {
    console.log('begin checking');
    //  Check validation
    req.check('username', 'Your username is not in form of an email!').isEmail();
    req.check('password', 'Hey! Your password should have 6 - 20 character?.').isLength({min:6, max:20});

    var allerror = req.validationErrors();
    console.log('List error if has? - > '+allerror);

    // redirect depends on validation
    if (allerror){
        req.session.error = allerror;
        req.session.loginauth = false;
        console.log('Got error');
        res.redirect('/login');
    }else {
        //checking on serverside
        var username = req.body.username;
        var password = req.body.password;
        /*var errorAuth = db.checkLogin(username, password);
        if (errorAuth){
            req.session.error = {'msg':'Username or Password is incorrect!'};
            res.redirect('/');
        }
        else {
            res.redirect('./');
        }*/
        console.log('no error');
        req.session.loginauth = true;
        req.session.error = allerror;
        res.redirect('./');
    }
});


module.exports = router;
