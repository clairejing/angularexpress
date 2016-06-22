let express = require('express');
let app = express();
let routes = require('./routes/index.js');
let users = require('./routes/users.js');
let cookieParser = require('cookie-parser');

let path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, '/')));

/*let MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', (err, db) => {
  if(err){
    throw err;
  }

  db.collection('mammals').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});*/

/*let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');*/


let mylogger = function (req, res, next) {
  console.log("logged");
  next();
};

let requestTime = function(req, res, next){
  req.requestTime = Date.now();
  next();
}

app.set('views', './views');
// app.set('view engine', 'pug');

app.use(cookieParser());
app.use(requestTime);

app.use(mylogger);
app.get('/', (req, res) =>{
   res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/index', (req, res) => {
  res.send('index');
});

app.use('/users', users);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something wrong!');
});

/*app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next){
  console.log(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next){
  if(req.xhr){
    res.status(500).send({err: "Something broke"});
  }else{
    next(err);
  }
}

function errorHanlder(err, req, res, next){
  res.status(500);
  res.render('error', {err: "error"});
}

app.get('/a_route_behind_paywall', (req, res, next) => {
  if(!req.user.hasPaid){
    next('route');
  }
}, (req, res, next) => {
  PaidContent.find(function(err, doc) {
      if(err) return next(err);
      res.json(doc);
    });
});*/

app.listen(3000, () => {
  console.log('Listen at port 3000!');
});
