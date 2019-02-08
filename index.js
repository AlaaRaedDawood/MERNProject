var express = require('express');
var app = express();
var bodyPraser =require('body-parser');
var routes = require('./routes/signup.js');
var mongoose = require('mongoose');
//connect to mongo and create database 
mongoose.Promise = global.Promise ;
mongoose.connect('mongodb://localhost/merndb',{  useCreateIndex: true,
useNewUrlParser: true }).then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  });


 app.use(bodyPraser.json());
 app.use('/api' , routes);
 app.listen(process.env.PORT || 3000, function () {
  console.log("listening at port 3000");
 });