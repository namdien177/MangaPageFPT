var mysql = require('mysql');
var cm = require('../CustomizedModule');        //  import custom function.

/**
 * Connect Database and make the connection an instance.
 * @type {Connection}
 */
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manhdaik",
    database: "mangahub"
});

//TODO: Làm hàm check xem có database/tables để connect không, nếu không có thì tự query tạo giống như đợt học java :D
exports= con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

/**
 * User Section
 * @type {{loginstatus: module.exports.loginstatus}}
 */
module.exports = {loginstatus :function loginstatus(username,password, callback) {
        con.query("SELECT * FROM customers where username = ? and password = ?", [username, password],function (err, result){
        //    console.log(username+' and '+ password);  TEST hoạt động.
        if (err) {callback(err, null);}
        else {
            callback(null, result);
        }
        });
    }
};

//TODO: Function search từ table trong database. cần tới keyword.
module.exports = {searchbyName: function (keyword) {
        //  SEARCH function viết trong này.
    }};