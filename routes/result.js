var express = require('express');
var router = express.Router();
var auth = require('../lib/auth');
var sqlite3 = require('sqlite3');
const db = new sqlite3.Database('user.db');

router.post('/logout', function(req, res){
    req.session.destroy(function(err){
        res.redirect('/login');
    });
});

module.exports = router;