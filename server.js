var createError = require('http-errors'); // allows easy creation of HTTP errors
var express = require('express'); // actual Express module
var path = require('path'); // allows for easy construction of directory paths
var logger = require('morgan'); // HTTP request logger module
var methodOverride = require('method-override');

var blogPostRouter = require('./routes/blogPosts')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // specify location of 'views' folder
app.set('view engine', 'ejs'); // specify the 'view engine' to be EJS

// configure middleware
app.use(logger('dev')); // sets 'Morgan' to development logging
app.use(express.json()); // tells Express to parse any JSON payloads coming in
app.use(express.urlencoded({ extended: false })); // tells Express to parse any 'form' data coming in
app.use(express.static(path.join(__dirname, 'public'))); /// tells Express where to look for static files (images, css, etc.)
app.use(methodOverride('_method'));

// mount routes
// app.use('/', homePageRouter)               *********** danny 10/19 *********** // need to make this router
app.use(blogPostRouter)

// Catch all route
app.get('*', (req, res) => { res.send('404 not found!') })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
