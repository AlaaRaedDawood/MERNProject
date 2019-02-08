var express = require('express');
var router = express.Router();
 

router.get('/' , function(req,res){
    //res.send makes it appear on webpage
    res.send('hello everyOne');
});
router.post('/' , function(req,res){
    //res.send makes it appear on webpage
    res.send(req.body);
});

module.exports = router;