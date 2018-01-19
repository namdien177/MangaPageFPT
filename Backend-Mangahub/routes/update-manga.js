const express = require('express');
const router = express.Router();
const _ = require('lodash');
const mongoose = require('mongoose');
//User Model
let {Chapter} = require('../models/chapter');
var {authenticate} = require('../middleware/authenticate');

/* GET register. */
router.get('/', function getHome(req, res, next) {
    res.render('update-manga',{title: 'MangaHub - Update'})
});

/* POST register*/
router.post('/', function (req, res, next) {
    var body = _.pick(req.body, ['nameManga', 'chapterDesc', 'transTeam', 'updateDate', 'transTeam', 'linkImage']);
    var chapter = new Chapter(body);

    chapter.save().then(() => {
        console.log('Update truyện thành công');
        res.redirect('./');
        //TODO: sau khi create xong sẽ cho ra trang chủ và hiện thông báo chờ validate truyện.
    }).catch((e) => {
        res.status(400).send(e);
    })
});

module.exports = router;
