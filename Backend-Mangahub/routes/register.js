var express = require('express');
var router = express.Router();
var cm = require('../CustomizedModule');                       //  import customized class
//let db = require('../DatabaseComps/DataConnection');        //  import database class

/* GET homepage. */
router.get('/', function getHome(req, res, next) {
    res.render('register', { title: 'MangaHub - Register' });
});


/* POST homepage*/

module.exports = router;
