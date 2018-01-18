var express = require('express');
var router = express.Router();
//let db = require('../DatabaseComps/DataConnection');        //      import database class

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
// POST /users
router.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then((user) => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});


module.exports = router;
