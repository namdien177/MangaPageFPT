const mongoose = require('mongoose');
const validator = require('validator');
//https://www.npmjs.com/package/validator
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost:27017/MangaHub');
var UserSchema = new mongoose.Schema({
    truename:{
        type: String,
        required: true,
        trim:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    gender:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minLength:6,
    },
    group:{                    //Free member / Author / Translate Team
        type: String,
    },
    membership:{                    // subscriber
        type: String,
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});
//TODO: Return the id and email before hash
UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function(password){

    var user = this;
    var access ='auth';
    var token = jwt.sign({_id:user._id.toHexString(),access},password).toString();

    user.tokens.push({
        access,token
    });
    return user.save().then(() => {
        console.log('save token');
        return token;
    });
};
UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};
//TODO: Hàm middleware pre sẽ được thực hiện trước khi dùng lệnh save().
UserSchema.pre('save',function(next){
    var user =this;

    if(user.isModified('password')){
        console.log('go');
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                user.password = hash;
                next();
            });
        });
    }else{
        next();
    }
});
UserSchema.statics.findByCredentials = function(email,password){
    var User = this;
    return User.findOne({email}).then((user)=>{
        if(!user){
            console.log('email is not found');
            return Promise.reject();
        }
        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,user.password,(err,res)=>{
                if(res){
                    console.log('user and password correct');
                    resolve(user);
                }else{
                    console.log('user and password is not correct');
                    reject();
                }
            });
        })
    })

};
var User = mongoose.model('User', UserSchema);

module.exports = {User};
