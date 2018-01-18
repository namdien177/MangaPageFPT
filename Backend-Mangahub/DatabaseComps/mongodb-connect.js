var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MangaHub',(err,db) =>{
    if (err){
        console.log('Unable to connect to mongodb server, if you are using mysql, just comments these line')
    }
    console.log('Connected to mongodb!');
});
