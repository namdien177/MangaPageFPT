//Todo: Hàm xóa trong mongodb;
/*
    TODO: Phần này về cơ bản không có gì nhiều, function thường được sử dụng là findOneAndDelte
 */
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MangaHub',(err,db) =>{
    if (err){
        console.log('Unable to connect to mongodb server, if you are using mysql, just comments these line')
    }
    console.log('Connected to mongodb!');
    // deleteMany
    // db.collection('Todos').deleteMany({}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({}).then((result) => {
    //   console.log(result);
    // });

    /* findOneAndDelete
        db.collection('Todos').findOneAndDelete({}).then((result) => {
        console.log(result);
    });
    */
    // db.collection('Users').deleteMany({name: ''});
    console.log('close connect to database');
    db.close();
});
