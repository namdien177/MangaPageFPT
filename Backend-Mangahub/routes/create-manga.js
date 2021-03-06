const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');
//User Model
let {Manga} = require('../models/manga');
var {authenticate} = require('../middleware/authenticate');

/* GET register. */
router.get('/', function getHome(req, res, next) {
    res.render('create-manga',{title: 'MangaHub - Create'})
});

/* POST register*/
router.post('/', function (req, res, next) {
    var body = _.pick(req.body, ['name', 'artist', 'transTeam', 'tag', 'desc', 'createDate', 'updateDate']);
    var manga = new Manga(body);

    manga.save().then(() => {
        console.log('tạo truyện thành công');
        res.redirect('./');
        //TODO: sau khi create xong sẽ cho ra trang chủ và hiện thông báo chờ validate truyện.
    }).catch((e) => {
        res.status(400).send(e);
    })
});

module.exports = router;
