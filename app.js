let express = require('express');
let app = express();
let routes = require('./routes/index.js');
let users = require('./routes/users.js');


let mylogger = function (req, res, next) {
  console.log("logged");
  next();
};

let requestTime = function(req, res, next){
  req.requestTime = Date.now();
  next();
}

app.set('views', './views');
app.set('view engine', 'pug');

app.use(requestTime);

app.use(mylogger);
app.get('/', (req, res) =>{
  let responseText = 'Hello World!<br>';
  responseText += '<small>Requested at: ' + req.requestTime + '</small>';
  res.send(responseText)
});

app.use('/index', routes);
app.use('/users', users);


app.listen(3000, () => {
  console.log('Listen at port 3000!');
});
