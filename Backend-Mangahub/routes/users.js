const express = require('express');
const router = express.Router();
const _ = require('lodash');

//User Model
let User = require('../models/user');

//Register Form
router.post('/register',function (req,res) {
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);
    user.save().then((user)=>{
        res.send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('bb');
  res.send('respond with a resource');
});

module.exports = router;
