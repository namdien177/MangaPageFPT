var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var app = express();
let db = require('../DatabaseComps/DataConnection');        //      import database class
=======
//let db = require('../DatabaseComps/DataConnection');        //      import database class
>>>>>>> f35cc22f66676e9a124b6200f802bcd4ffb042f3

/* GET Login page */
/**
 * Trang mặc định được gọi.
 */
router.get('/', function(req, res, next) {
    res.render('login');
});


/* POST Login page */
/**
 * Login Function được đặt riêng đễ dễ dàng modify.
 * TODO: Viết lại hàm này phù hợp với mã hóa của Mạnh.
 * @param req
 * @param res
 * @param next
 */
function loginFunct(req, res, next) {
    /*receive information
    let username = req.body.username;
    let password = req.body.password;
    let saveuser = req.body.rememberme;

    //checking on server
    db.loginstatus(username,password, (err,rec)=>{
        if (err){                                       //lỗi connect lên server để check password
            req.session.username = false;
            res.render('/', { title: 'Login', loginstatus: req.session.username, errormessage: 'There is something' +
                'wrong with our database/server. We are sorry for this incontinent.'}); //return login page with error message
        }else {
            if(rec.length >0){                              //lỗi connect lên server nhưng sai tài khoản/password
                    req.session.username = true;
                    res.render('index', { title: 'MangaHub - Home', loginstatus: req.session.username}); //return homepage
            }else{
                req.session.username = false;
                res.render('/', { title: 'Login', loginstatus: req.session.username, errormessage: 'It seems like' +
                    'you entered wrong username/password. Please try again.'}); //return login page with error message
            }
        }
    });*/
}

/**
 * Post for login form. Lấy function từ trên.
 * TODO: Thiết kế trang login với biến: title, loginstatus, errormessage.
 */
router.post('/logged-in', loginFunct);


module.exports = router;
