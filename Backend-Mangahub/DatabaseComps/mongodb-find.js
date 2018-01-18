//Todo: Hàm tìm kiếm trong mongodb;
/*
Todo: then docs để get những thông tin từng đối tượng, then count để đếm có bao nhiêu đối tượng tìm được, chi tiết xem phần link;
//http://mongodb.github.io/node-mongodb-native/3.0/api/
 */
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MangaHub',(err,db) =>{
    if (err){
        console.log('Unable to connect to mongodb server, if you are using mysql, just comments these line')
    }
    console.log('Connected to mongodb!');
    /*inside find({}) use parameter to find
        find({username:'username'})
     */
    /*we also can use ObjectID to find an object
        find({
        _id: new ObjectID('id')
        })
     */
    /*db.collection('User').find().count().then((count)=>{
        console.log(`count ${count}`);
    },(err)=>{
        console.log('Unable to fetch user: local DatabaseComps/mongodb-find.js',err)
    });
    */
    db.collection('User').find().toArray().then((count)=>{
        console.log(`count ${count}`);
    },(err)=>{
        console.log('Unable to fetch user: local DatabaseComps/mongodb-find.js',err)
    });
    console.log('close connect to database');
    db.close();
});
