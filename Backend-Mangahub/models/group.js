const mongoose = require('mongoose');
const validator = require('validator');
//https://www.npmjs.com/package/validator
const jwt = require('jsonwebtoken');
const _ = require('lodash');

mongoose.connect('mongodb://localhost:27017/MangaHub');
var GroupSchema = new mongoose.Schema({
    groupName:{
        type: String,
        required: true,
        trim:true,
    },
    groupDesc:{
        type: String,
        required: true,
    },
    groupType:{
        type: Boolean,
        required: true,
    },
    createDate:{
        type: Date,
        required:true,
    },
    imageLink:{
        type:String,
    },
    rating:{
        type: Number,
        min:0,
        max:5,
    }
});

var Group = mongoose.model('Group', GroupSchema);

module.exports = {Group};
