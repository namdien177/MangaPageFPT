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
    
}

/**
 * Post for login form. Lấy function từ trên.
 * TODO: Thiết kế trang login với biến: title, loginstatus, errormessage.
 */
router.post('/logged-in', loginFunct);


module.exports = router;
