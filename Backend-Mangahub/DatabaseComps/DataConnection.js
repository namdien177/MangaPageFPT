var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mangahub"
});

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
            console.log(username+' and '+ password);
        if (err) {callback(err, null);}
        else {
            callback(null, result);
        }
    });
    }

};