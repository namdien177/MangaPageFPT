var express = require('express');
var router = express.Router();
var cm = require('../CustomizedModule');                       //  import customized class
//let db = require('../DatabaseComps/DataConnection');        //  import database class

/* GET homepage. */
router.get('/', function getHome(req, res, next) {
    res.render('index', { title: 'MangaHub - Homepage',});
});
/*
function getRecentUpdate() {
    
}

function getPromotedAuthor() {
    
}

function getSuggestManga() {
    
}

function getTop3Manga() {
    
}

function getTop11Manga() {

}*/

/* POST homepage*/

module.exports = router;
