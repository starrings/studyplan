var express = require('express');
var router = express.Router();
var auth = require('../lib/auth');


router.get('/', function(req, res){
    
    //res.render('/login', {authMy: auth.StatusUI(req, res), authmylog: auth.StatusLog(req, res), notify: ''});
    if(req.session.is_logined){
    res.redirect('/cal');
    }else{
        res.redirect('/login');
    }
});

router.get('/logout', function(req, res){
    req.session.destroy(function(err){
        res.redirect('/login');
    });
});


module.exports = router;