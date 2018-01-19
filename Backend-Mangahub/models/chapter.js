const mongoose = require('mongoose');
const validator = require('validator');
//https://www.npmjs.com/package/validator
const jwt = require('jsonwebtoken');
const _ = require('lodash');

mongoose.connect('mongodb://localhost:27017/MangaHub');
var ChapterSchema = new mongoose.Schema({
    nameManga:{
        type: String,
        required: true,
        trim:true,
    },
    chapterDesc:{           // bake chap4?
        type: String,
        required: true,
    },
    updateDate:{
        type: Date,
        required: true,
    },
    transTeam:{
        type: String,
        required: true,
    },
    linkImage: {
        type: String,
        required: true,
        trim: true,
    },
});


var Chapter = mongoose.model('Chapter', ChapterSchema);

module.exports = {Chapter};
