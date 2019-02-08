var express = require('express');
var router = express.Router();
var User = require('../model/users');

router.get('/' , function(req,res){
    //res.send makes it appear on webpage
    res.send('hello everyOne');
});
router.post('/' , function(req,res){
     User.create(req.body).then(function(user){

    //res.send makes it appear on webpage
    res.send(user);
    }
    );
  
    
});

module.exports = router;