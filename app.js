var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('express-handlebars');

var indexRouter = require('./routes/index');

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbEnzrald:Khoa19082003@mydatabase.v2hogoh.mongodb.net/srv_review');

var app = express();


app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(3000,() => console.log('Listening on port 3000 ...'));

module.exports = app;
