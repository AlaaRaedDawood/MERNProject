var express = require('express');
var app = express();
var bodyPraser =require('body-parser');
var routes = require('./routes/signup.js');
 app.use(bodyPraser.json());
 app.use('/api' , routes);
 app.listen(3000, function () {
  console.log("listening at port 3000");
 });