const mongoose = require('mongoose');
const validator = require('validator');
//https://www.npmjs.com/package/validator
const jwt = require('jsonwebtoken');
const _ = require('lodash');

mongoose.connect('mongodb://localhost:27017/MangaHub');
var MangaSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
    },
    artist:{
        type:String,
        required:true,
    },
    transTeam:{
        type: String,
    },
    tag:{
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    },
    createDate:{
        type: Date,
        required: true,
    },
    updateDate:{
        type: Date,
        required: true,
    },
    view:{
        type: Number,
        min: 0,
    },
    subscribe:{
        type: Number,
        min: 0,
    },
    react:{
        type: Boolean,
    }
});


var Manga = mongoose.model('Manga', MangaSchema);

module.exports = {Manga};
