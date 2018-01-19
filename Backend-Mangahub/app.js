var express = require('express');
const _ = require('lodash');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var session = require('express-session');
var eValidatior = require('express-validator');

var index = require('./routes/index');
var login = require('./routes/login');
let users = require('./routes/users');
var search = require('./routes/search');
var register = require('./routes/register');
var create_manga = require('./routes/create-manga');
var update_manga = require('./routes/update-manga');
var app = express();

// view engine setup

//app.set('views', path.join(__dirname, 'views'));      //this way might works for some people.
app.set('views', './views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(eValidatior());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'max', saveUninitialized:false, resave:false}));

// Routes for site:
app.use('/', index);                    //homepage
app.use('/login', login);               //login page
app.use('/user', users);                //profile page
app.use('/search', search);             //search page
app.use('/register',register);          //register page
app.use('/create-manga',create_manga);  //create manga page
app.use('/update-manga',update_manga);  //update manga page
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// error handler

module.exports = app;
