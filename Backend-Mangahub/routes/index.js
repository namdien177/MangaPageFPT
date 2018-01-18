var express = require('express');
var router = express.Router();
var cm = require('../CustomizedModule');                       //  import customized class
let db = require('../DatabaseComps/DataConnection');        //  import database class

/* GET homepage. */
router.get('/', function getHome(req, res, next) {
    res.render('index', { title: 'MangaHub - Homepage' });
});

/**
 * GET router for Searching function.
 * TODO: Function search từ table trong database. Chờ xong table và thiết kế xong tất cả các hàm search.
 */
router.get('/search:pattern', function getSearch(req, res, next) {
    let searchword = req.params.pattern;
    if (searchword.length>0){
        var findByName = db.searchbyName(searchword);
        var findByArtist = db.searchbyArtist(searchword);
        var findByTranslateTeam = db.searchbyTeam(searchword);
        res.render('search',{listName: findByName, listArtist:findByArtist, listTrans:findByTranslateTeam});
    }
});


/* POST homepage*/

module.exports = router;
