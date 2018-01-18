const mysql = require('mysql-model');
const validator = require('validator');
const _ = require('lodash');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manhdaik",
    database: "mangahub"
});

var User = new con.extend({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});
module.exports ={User};